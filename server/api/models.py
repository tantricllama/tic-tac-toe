from django.db import models

class Game(models.Model):
	games = models.Manager()
	winner = models.CharField(max_length=1)

	def __str__(self):
		return self.winner

class Board(models.Model):
	boards = models.Manager()
	game = models.ForeignKey(Game, on_delete=models.PROTECT)
	layout = models.CharField(max_length=9)

	def __str__(self):
		return self.layout