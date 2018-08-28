from django.urls import path

from . import views


app_name = 'frontend'
urlpatterns = [
    path('', views.index, name='index'),
    path('react/', views.react, name='react'),
    path('materialui/', views.materialui, name='materialui'),
    path('reactadmin/', views.reactadmin, name='reactadmin'),
]
