from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_protect

from leads.models import Lead
from leads.serializers import LeadSerializer
from rest_framework import generics


@method_decorator(csrf_protect, name='dispatch')
class LeadListCreate(LoginRequiredMixin, generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
