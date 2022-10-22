from django.contrib import admin
from .models import Blog, Subscriber, Projects
# Register your models here.

class BlogModelAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at','updated_at')
    search_fields = ('title', 'description')
    # list_per_page = 1

class SubscriberModelAdmin(admin.ModelAdmin):
    list_display = ('email', 'blog', 'created_at')
    search_fields = ('email', 'blog__title', 'created_at')
    # list_per_page = 1

class ProjectsModelsAdmin(admin.ModelAdmin):
    list_display= ('title', 'created_at', 'updated_at')
    search_fields= ('title', 'description')

admin.site.register(Blog, BlogModelAdmin)
admin.site.register(Subscriber, SubscriberModelAdmin)
admin.site.register(Projects, ProjectsModelsAdmin)