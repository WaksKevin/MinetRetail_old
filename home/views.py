from django.shortcuts import render

# Create your views here.


def index(request):
    context = {
        "index_active": "active",
    }

    return render(request, "home/index.html", context)


def individual_solutions(request):
    context = {
        "individual_solutions_active": "active",
    }

    return render(request, "home/individual-solutions.html", context)


def corporate_product(request):
    context = {
        "corporate_product_active": "active",
    }

    return render(request, "home/corporate-product.html", context)


def privacy_policy(request):
    context = {
        "privacy_policy_active": "active",
    }

    return render(request, "home/privacy-policy.html", context)
