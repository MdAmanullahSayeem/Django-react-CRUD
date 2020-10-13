from django.db import models

# Create your models herec

class TestModel(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    title = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.title


class MoviModel(models.Model):
    title= models.CharField(max_length=255, null=True, blank=True)
    type= models.CharField(max_length=255, null=True, blank=True)
    rating= models.DecimalField(decimal_places=2, max_digits=3,null=True, blank=True)

    def __str__(self):
        return self.title