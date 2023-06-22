from django.urls import path
from .views import Inicio,Menu,Acerca,registro,agregar_producto,listar_productos,modificar_producto,eliminar_producto

urlpatterns = [
    path('', Inicio, name='Inicio'),
    path('Menu/', Menu, name='Menu'),
    path('Acerca/', Acerca, name='Acerca'),
    path('registro/', registro, name='registro'),
    path('agregar-producto/', agregar_producto, name="agregar_producto"),
    path('listar_productos/', listar_productos, name="listar_productos"),
    path('modificar-producto/<id>/', modificar_producto, name='modificar_producto'),
    path('eliminar-producto/<id>/', eliminar_producto, name="eliminar_producto"),
]