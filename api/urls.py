from django.urls import path
from .views import apiOverview, taskList,taskDelete, taskCreate, taskUpdate
urlpatterns = [
    path('task/', apiOverview, name=''),
    path('task-list/', taskList),
    path('task-create/', taskCreate),
    path('task-update/<str:pk>/', taskUpdate),
    path('task-delete/<str:pk>/',taskDelete, name=''),
]