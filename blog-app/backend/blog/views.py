from django.shortcuts import render
from rest_framework import generics, response, status
from .models import Blog, Subscriber, Projects
from .serializers import BlogSerializers, SubscriberSerializer, ProjectsSerializer

# Create your views here.

class BlogListAPIView(generics.ListAPIView):

    serializer_class = BlogSerializers

    def get_queryset(self):
        return Blog.objects.all()


class BlogDetailAPIView(generics.GenericAPIView):
    serializer_class = BlogSerializers
    def get(self, request, slug):

        query_set = Blog.objects.filter(slug=slug).first()

        if query_set:
            return response.Response(self.serializer_class(query_set).data)

        return response.Response('Not Found', status=status.HTTP_404_NOT_FOUND)

class SubscribeToBlogAPIView(generics.CreateAPIView):
    serializer_class = SubscriberSerializer

    def get_queryset(self):
        return Subscriber.objects.all()

class ProjectsListAPIView(generics.ListAPIView):

    serializer_class = ProjectsSerializer

    def get_queryset(self):
        return Projects.objects.all()


class ProjectsDetailAPIView(generics.GenericAPIView):
    serializer_class = ProjectsSerializer
    def get(self, request, slug):

        query_set = Projects.objects.filter(slug=slug).first()

        if query_set:
            return response.Response(self.serializer_class(query_set).data)

        return response.Response('Not Found', status=status.HTTP_404_NOT_FOUND)