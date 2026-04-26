from django.urls import path
from .views import get_projects, add_project, delete_project, update_project

urlpatterns = [
    path('', get_projects),
    path('add/', add_project),
    path('delete/<int:id>/', delete_project),
    path('update/<int:id>/', update_project),
]