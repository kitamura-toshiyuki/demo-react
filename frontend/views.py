from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect


@login_required
@csrf_protect
def index(request):
    return render(request, 'frontend/index.html')
