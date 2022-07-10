from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
# Create your models here.
class User(AbstractUser):
    def __str__(self):
        return f'{self.username} {self.email}'
