from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.decorators.csrf import csrf_protect


@login_required
@csrf_protect
def index(request):
    return render(request, 'frontend/index.html')


@login_required
@csrf_protect
def react(request):
    return render(request, 'frontend/react.html')


@login_required
@csrf_protect
def materialui(request):
    return render(request, 'frontend/materialui.html')


@login_required
@csrf_protect
def reactadmin(request):
    return render(request, 'frontend/reactadmin.html')
