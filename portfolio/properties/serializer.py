from rest_framework import serializers
from .models import MainProperties


class PropSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainProperties
        fields = "__all__"
