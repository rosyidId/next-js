from rest_framework import serializers
from .models import Blog,Subscriber, Projects

class BlogSerializers(serializers.ModelSerializer):

    class Meta:
        model = Blog
        fields = "__all__"

class SubscriberSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subscriber
        fields = "__all__"

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = "__all__"