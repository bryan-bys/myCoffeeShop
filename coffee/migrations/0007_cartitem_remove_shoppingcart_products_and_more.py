# Generated by Django 4.2.6 on 2023-12-05 23:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('coffee', '0006_remove_shoppingcart_coffee_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='CartItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.PositiveIntegerField(default=1)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='coffee.coffee')),
            ],
        ),
        migrations.RemoveField(
            model_name='shoppingcart',
            name='products',
        ),
        migrations.DeleteModel(
            name='ItemCart',
        ),
        migrations.DeleteModel(
            name='ShoppingCart',
        ),
    ]
