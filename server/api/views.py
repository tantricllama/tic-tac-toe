from django.db import connection
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Board
from api.serializers import BoardSerializer
import random

@csrf_exempt
def next_move(request, player, layout = None):
    """
    Retrieve the next move of the player.
    """
    return JsonResponse({
        "odds": __odds(layout),
        "hints": __hints(player, layout)
    }, safe=False)

def __odds(layout):
    """
    Retrieve the odds of winning for both players and the chance of a stalemate.
    """
    cursor = connection.cursor()
    cursor.execute("""\
        SELECT g.winner, COUNT(DISTINCT g.id) AS total
        FROM api_board b
            INNER JOIN api_game g ON g.id = b.game_id
        WHERE b.layout = %s
        GROUP BY g.winner""", [layout])
    odds = cursor.fetchall()
    total = sum([o[1] for o in odds])
    return [[o[0], round(o[1] / total * 100, 1)] for o in odds]

def __hints(player, layout):
    """
    Retrieve the odds of winning for both players and the chance of a stalemate.
    """
    # If there is no layout then we just want a random first move
    if layout is None:
        return divmod(random.randrange(9), 3)

    # Determine the next move using the DB
    cursor = connection.cursor()
    cursor.execute("""\
        SELECT t.layout, t.winner, MIN(t.remaining) AS score
        FROM (
            SELECT g.id, g.winner, (
                    SELECT layout
                    FROM api_board b2
                    WHERE b2.game_id = g.id
                        AND b2.id > b1.id
                    ORDER BY b2.id
                    LIMIT 1
                ) AS layout, (
                    SELECT COUNT(*)
                    FROM api_board b2
                    WHERE b2.game_id = g.id
                        AND b2.id > b1.id
                ) AS remaining
            FROM api_board b1
                INNER JOIN api_game g ON g.id = b1.game_id
            WHERE b1.layout = %s
        ) t
        GROUP BY t.layout, t.winner
        ORDER BY t.winner, score""", [layout])

    # Win tallies
    wins = []
    draws = []
    losses = []

    for row in cursor.fetchall():
        for i, item in enumerate(layout):
            if row[0][i] != item:
                row = list(row + divmod(i, 3))

        # If any player can win
        if row[1] == player:
            wins.append(row)
        elif row[1] == '-':
            draws.append(row)
        else:
            losses.append(row)

    # Find all layouts where the next player will win
    avoid = [l[0] for l in losses if l[2] == 2]

    # Remove layouts leading to a loss from the wins and draws
    best_wins = __get_best([w for w in wins if avoid.count(w[0]) == 0])
    best_draws = __get_best([d for d in draws if avoid.count(d[0]) == 0])

    if best_wins: # We can try to win
        return best_wins[random.randrange(len(best_wins))][3:5]
    elif best_draws: # We can try to draw
        return best_draws[random.randrange(len(best_draws))][3:5]
    elif wins: # Unlikely to win but try anyway
        return wins[random.randrange(len(wins))][3:5]
    elif draws: # Cannot win so try to draw
        return draws[random.randrange(len(draws))][3:5]
    return None

def __get_best(items):
    score = None
    results = []
    for i in items:
        if score is None or score > i[2]:
            score = i[2]
            results = [i]
        elif score == i[2]:
            results.append(i)
    return results