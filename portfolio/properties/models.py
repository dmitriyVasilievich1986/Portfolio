from django.db import models


class MainProperties(models.Model):
    language = models.CharField(max_length=5)
