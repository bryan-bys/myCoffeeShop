from django.urls import path, include 
from rest_framework import routers
from .views import CoffeeView, CartItemView


router = routers.DefaultRouter()
router.register(r'coffee',  CoffeeView, 'coffee')
router.register(r'itemcart',  CartItemView, 'itemcart')





urlpatterns = [
  path('api/v1/', include(router.urls))
]