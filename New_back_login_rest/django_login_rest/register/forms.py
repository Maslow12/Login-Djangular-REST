from django.db import models
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model
from .models import User

class UserForm(UserCreationForm):
	class Meta:
		model = User
		fields = ['first_name','last_name','username', 'password', 'email']