from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Coffee, CartItem
from .serializer import CoffeeSerializer, CartItemSerializer

class CoffeeView(viewsets.ModelViewSet):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer

class CartItemView(viewsets.ModelViewSet):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

    
    def create(self, request):
         coffee_id = request.data.get('coffee')
         quantity = int(request.data.get('quantity', 1))

         cart_item = CartItem.objects.filter(coffee__id=coffee_id).first()

         if cart_item:
             cart_item.quantity += quantity
             cart_item.save()
             serializer = self.get_serializer(cart_item)
             return Response(serializer.data, status=status.HTTP_200_OK)
         else:
             serializer = self.get_serializer(data=request.data)
             serializer.is_valid(raise_exception=True)
             self.perform_create(serializer)
             headers = self.get_success_headers(serializer.data)
             return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)



  


    

   



