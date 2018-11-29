from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination #分页
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework_extensions.cache.mixins import CacheResponseMixin
# from rest_framework.throttling import UserRateThrottle, AnonRateThrottle # 限速使用

from .models import Settings, Guanggaos
from .serializers import SettingsSerializer, GuanggaosSerializer
from .filters import SettingsFilter, GuanggaosFilter


class SettingsListViewSet(CacheResponseMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Settings.objects.all()
    serializer_class = SettingsSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)
    filter_class = SettingsFilter
class GuanggaosListViewSet(CacheResponseMixin, mixins.ListModelMixin, viewsets.GenericViewSet):
    queryset = Guanggaos.objects.all()
    serializer_class = GuanggaosSerializer
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)
    filter_class = GuanggaosFilter






