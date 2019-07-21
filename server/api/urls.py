from django.urls import path, include
from rest_framework import routers
from . import views

urlpatterns = [
	path('move/<str:player>/<str:layout>/', views.next_move),
	path('move/<str:player>/', views.next_move),
]