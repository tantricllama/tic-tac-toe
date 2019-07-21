import os
from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse

def index(request):
	with open(os.path.join(settings.BASE_DIR, "..", "build", "index.html")) as f:
		return HttpResponse(f.read())