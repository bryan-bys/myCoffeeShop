from rest_framework import serializers
from .models import Coffee, CartItem

class CoffeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coffee
        fields = '__all__'

class CartItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CartItem
        fields = '__all__'

    def to_representation(self, instance):
      return{
        'id':instance.id,
        'coffee': instance.coffee.name,
        'quantity': instance.quantity,
        'price':instance.coffee.price,
        'image':instance.coffee.image
    
       }        

        

    


     


        

   





   

