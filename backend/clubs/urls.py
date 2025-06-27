from rest_framework.routers import DefaultRouter
from .views import RegionViewSet, ClubViewSet, TeamViewSet, PlayerViewSet

router = DefaultRouter()
router.register(r"regions", RegionViewSet)
router.register(r"clubs", ClubViewSet)
router.register(r"teams", TeamViewSet)
router.register(r"players", PlayerViewSet)

urlpatterns = router.urls
