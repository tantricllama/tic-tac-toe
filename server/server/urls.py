from django.urls import path, include

urlpatterns = [
	path('', include('api.urls')),
	path('', include('web.urls')),
]