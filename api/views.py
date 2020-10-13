from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import TestModel,MoviModel
from .serializers import TaskSerializer
@api_view(['GET'])
def apiOverview(request):
    api_url = {
    	'List': '/task-list/',
    	'Detail View': '/task-detail/<str:pk>/',
    	'Create': '/task-create/',
    	'Update':'/task/update/<str:int>',
    	'Delete': '/task-delete/<str:pk>',
    }
    return Response(api_url)

@api_view(['GET'])
def taskList(request):
    task = MoviModel.objects.all().order_by('-id')
    serializer = TaskSerializer(task, many=True)
    return Response (serializer.data)


@api_view(['POST'])
def taskCreate(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request, pk):
    task=MoviModel.objects.get(id=pk)
    serializer = TaskSerializer(instance=task, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def taskDelete(request,pk):
    task =MoviModel.objects.get(pk=pk)
    task.delete()
    return Response('Item succsesfully delete!')