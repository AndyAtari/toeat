from rest_framework import serializers
from .models import Toeat

class ToeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Toeat
        fields = ('id', 'title', 'description', 'completed')

