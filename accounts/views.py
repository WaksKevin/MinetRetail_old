from django.shortcuts import render

# Create your views here.


def login(request):
    context = {
        "login_active" : "active",
    }

    return render(request, "accounts/login.html", context)
