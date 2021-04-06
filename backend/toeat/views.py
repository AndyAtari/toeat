from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ToeatSerializer
from .models import Toeat

class ToeatView(viewsets.ModelViewSet):
    serializer_class = ToeatSerializer
    queryset = Toeat.objects.all()
