from .viewset import PropsViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register("api/properties", PropsViewSet)

urlpatterns = router.urls

