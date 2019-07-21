from rest_framework import serializers

from .models import Game, Board

class GameSerializer(serializers.ModelSerializer):
	class Meta:
		model = Game
		fields = '__all__'

class BoardSerializer(serializers.ModelSerializer):
	class Meta:
		model = Board
		fields = '__all__'