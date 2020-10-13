from rest_framework import serializers
from .models import TestModel, MoviModel

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = MoviModel
        fields = '__all__'