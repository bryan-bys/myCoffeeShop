from django.db import models

# Create your models here.


class Coffee(models.Model):
    
    TYPE_OPTION=(('bean', 'bean'),('cap', 'cap'),)

    name = models.CharField(max_length=50)
    tipo = models.CharField(max_length=50, choices=TYPE_OPTION)
    description = models.TextField(blank=True)
    origyn = models.CharField(max_length=50)
    intensity = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    image = models.URLField(default='', blank=True)

    def __str__(self):
         return f'{self.name}-{self.tipo}'
    
class CartItem(models.Model):
    coffee = models.ForeignKey(Coffee, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.coffee}-{self.quantity}'


  



 