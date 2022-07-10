from django.contrib import admin
from django.urls import path, include
from .api import RegisterAPIView

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='Register')
]