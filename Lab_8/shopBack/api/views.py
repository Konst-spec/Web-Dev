from django.shortcuts import render

from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()

    data = []
    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
            "category": p.category_id
        })
    return JsonResponse(data, safe=False)

def product(request, id):

    p = Product.objects.get(id=id)

    data = {
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category": p.category_id
    }

    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()

    data = []
    for c in categories:
        data.append({
            "id": c.id,
            "name": c.name
        })

    return JsonResponse(data, safe=False)

def category(request, id):
    c = Category.objects.get(id=id)

    data = {
        "id": c.id,
        "name": c.name
    } 
    return JsonResponse(data)

def products_by_category(request, id):
    products = Product.objects.filter(category_id=id)

    data = []
    for p in products:
        data.append({
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "count": p.count
        })

    return JsonResponse(data, safe=False)