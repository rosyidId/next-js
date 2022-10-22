from django.urls import path
from .views import *


urlpatterns = [
    path('blog', BlogListAPIView.as_view(), name="blog"),
    path('projects', ProjectsListAPIView.as_view(), name="projects"),
    path('projects/<str:slug>', ProjectsDetailAPIView.as_view(), name="projects"),
    path('blog/<str:slug>', BlogDetailAPIView.as_view(), name="blog"),
    path('subscribers', SubscribeToBlogAPIView.as_view(), name="subscribe")
]