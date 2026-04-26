
from django.http import JsonResponse
from django.urls import path
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


def home(request):
    return JsonResponse({"message": "Backend is working!"})

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),

    # JWT Login API
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/projects/', include('projects.urls')),
   



   

   
    
]

from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)