from django.urls import path
from .views import *

urlpatterns = [
    path('products/', product_list),
    path('products/<int:id>/', product),

    path('categories/', category_list),
    path('categories/<int:id>/', category),
    path('categories/<int:id>/products/', products_by_category),
]