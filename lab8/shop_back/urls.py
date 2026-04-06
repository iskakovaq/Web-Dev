from django.contrib import admin
from django.urls import path, include  # include нужен для подключения api.urls

urlpatterns = [
    path('admin/', admin.site.urls),   # Админка
    path('api/', include('api.urls')), # Подключаем API приложения 'api'
]
