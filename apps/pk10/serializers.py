from rest_framework import serializers
# from django.db.models import Q
from .models import Pk10_Open
# 

class Pk10_Open_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Pk10_Open
        fields = "__all__"