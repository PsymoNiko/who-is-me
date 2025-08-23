# Add this to your Django views.py for health check endpoint
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods

@require_http_methods(["GET"])
def health_check(request):
    """Simple health check endpoint"""
    return JsonResponse({
        "status": "healthy",
        "message": "Django API is running"
    })

# Add this to your urls.py
# path('api/health/', views.health_check, name='health-check'),
