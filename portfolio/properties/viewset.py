from .serializer import PropSerializer
from rest_framework import viewsets, permissions
from .models import MainProperties


class PropsViewSet(viewsets.ModelViewSet):
    serializer_class = PropSerializer
    queryset = MainProperties.objects.all()
    permission_classes = [permissions.AllowAny]
