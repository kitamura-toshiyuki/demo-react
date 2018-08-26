from django.urls import path

from . import views


app_name = 'leads'
urlpatterns = [
    path('api/', views.LeadListCreate.as_view()),
]
