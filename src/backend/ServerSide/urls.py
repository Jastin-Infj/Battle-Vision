from django.urls import path
from .views import ( 
  HomeView, User_Create
)

app_name = 'ServerSide'

urlpatterns = [
  path('home/' , HomeView.as_view()    , name="home"  ),
  path('add/'  , User_Create.as_view() , name="add"   ),
]