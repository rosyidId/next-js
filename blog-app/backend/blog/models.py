from django.db import models
from cloudinary.models import CloudinaryField
from django.template.defaultfilters import slugify

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=255, null=True, blank=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    logo =CloudinaryField('Image', overwrite=True, format="jpg")

    class Meta:
        ordering = ('-created_at',)

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        to_assign=slugify(self.title)

        if Blog.objects.filter(slug=to_assign).exists():
            to_assign=to_assign+str(Blog.objects.all().count())

        self.slug=to_assign

        super().save(*args, **kwargs)


class Subscriber(models.Model):
    blog = models.ForeignKey(to=Blog, on_delete=models.DO_NOTHING)
    email = models.EmailField(max_length=254)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self) -> str:
        return self.email 


class Projects(models.Model):
    title = models.CharField(max_length=245)
    slug = models.SlugField(max_length=255, null=True, blank=True)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        to_assign=slugify(self.title)

        if Projects.objects.filter(slug=to_assign).exists():
            to_assign=to_assign+str(Projects.objects.all().count())

        self.slug=to_assign

        super().save(*args, **kwargs)
