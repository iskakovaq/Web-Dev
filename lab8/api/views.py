from django.http import JsonResponse
from .models import Product, Category

# Список всех продуктов
def products_list(request):
    products = Product.objects.all().values()
    return JsonResponse(list(products), safe=False)

# Один продукт по id
def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category": product.category.id
        })
    except Product.DoesNotExist:
        return JsonResponse({"error": "Product not found"}, status=404)

# Список категорий
def categories_list(request):
    categories = Category.objects.all().values()
    return JsonResponse(list(categories), safe=False)

# Одна категория по id
def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse({
            "id": category.id,
            "name": category.name
        })
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)

# Продукты по категории
def products_by_category(request, id):
    try:
        category = Category.objects.get(id=id)
        products = Product.objects.filter(category=category).values()
        return JsonResponse(list(products), safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found"}, status=404)