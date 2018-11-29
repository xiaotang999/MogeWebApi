from rest_framework import serializers
from .models import Settings, Guanggaos


class SettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Settings
        fields = "__all__"
class GuanggaosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guanggaos
        fields = ['id', 'name', 'image', 'href', 'is_show']