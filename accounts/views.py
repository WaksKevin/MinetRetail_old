from django.shortcuts import render

# Create your views here.


def login(request):
    context = {
        "page_id" : "login",
        "login_active" : "active",
    }

    return render(request, "accounts/login.html", context)
