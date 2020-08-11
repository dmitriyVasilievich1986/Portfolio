from django.urls import path
from .views import index

urlpatterns = [
    path("", index),
    path("api", index),
    path("frontend", index),
    path("reference", index),
]

