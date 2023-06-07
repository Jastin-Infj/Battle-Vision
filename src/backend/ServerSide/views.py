from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic.edit import CreateView

from django.urls import reverse_lazy

from .models import User

# Create your views here.

class HomeView(TemplateView):
  template_name = 'dj-home.html'

class User_Create(CreateView):
  template_name = 'dj-add.html'
  model = User
  fields = ['name','age']
  
  success_url = reverse_lazy('ServerSide:home')