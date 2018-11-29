import django_filters
from .models import Settings, Guanggaos


class SettingsFilter(django_filters.rest_framework.FilterSet):
    name = django_filters.CharFilter(field_name='name')
    class Meta:
        model = Settings
        fields = ['id', 'name']
class GuanggaosFilter(django_filters.rest_framework.FilterSet):
    name = django_filters.CharFilter(field_name='name')
    class Meta:
        model = Guanggaos
        fields = ['id', 'name']