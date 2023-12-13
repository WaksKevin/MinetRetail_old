from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("individual-solutions", views.individual_solutions, name="individual-solutions"),
    path("corporate-product", views.corporate_product, name="corporate-product"),
]
