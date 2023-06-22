from django.shortcuts import render, redirect,get_object_or_404
from .forms import CustomUserCreationForm,ProductoForm
from django.contrib.auth import authenticate,login
from django.contrib import messages
from .models import Producto

# Create your views here.

def Inicio(request):
    return render(request, 'app/Inicio.html')

def Menu(request):
    return render(request, 'app/Menu.html')

def Acerca(request):
    return render(request, 'app/Acerca.html')

def registro(request):
    data = {
        'form': CustomUserCreationForm()
    }
    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            #redirijir al home
            user= authenticate(username=formulario.cleaned_data['username'], password=formulario.cleaned_data["password1"])
            login(request,user)
            messages.success(request,"Te has registrado correctamente")
            return redirect(to='Inicio')
        data["form"] = formulario
    return render(request,'registration/registro.html', data)

def agregar_producto(request):
    data = {
        'form': ProductoForm()
    }
    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"]="guardado correctamente,vuelva a la pestaña productos"
            return redirect(to="listar_productos")
        else:
            data["form"]= formulario

    return render(request, 'app/producto/agregar.html', data)

def listar_productos(request):
    productos = Producto.objects.all()
    data = {
        'productos': productos
    }
    return render(request, 'app/producto/listar.html', data)

def modificar_producto(request, id):
    
    producto = get_object_or_404(Producto, id=id)
    data = {
        'form': ProductoForm(instance=producto)
    }
    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, instance=producto)
        if formulario.is_valid():
            formulario.save()
            return redirect(to="listar_productos")
        data["form"]= formulario
    return render(request, 'app/producto/modificar.html', data)

def eliminar_producto(request, id):
    producto = get_object_or_404(Producto, id=id)
    producto.delete()
    return redirect(to="listar_productos")