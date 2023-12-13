from django.shortcuts import render

# Create your views here.


def index(request):
    context = {
        "page_id": "index",
        "index_active": "active",
    }

    return render(request, "home/index.html", context)


def individual_solutions(request):
    context = {
        "page_id": "individual-solutions",
        "individual_solutions_active": "active",
    }

    return render(request, "home/individual-solutions.html", context)


def corporate_product(request):
    context = {
        "page_id": "corporate-product",
        "corporate_product_active": "active",
    }

    return render(request, "home/corporate-product.html", context)
