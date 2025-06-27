from rest_framework.routers import DefaultRouter
from .views import (
    CompetitionViewSet,
    FixtureViewSet,
    ResultViewSet,
    StandingViewSet,
    PlayerMatchStatsViewSet,
)

router = DefaultRouter()
router.register(r"competitions", CompetitionViewSet)
router.register(r"fixtures", FixtureViewSet)
router.register(r"results", ResultViewSet)
router.register(r"standings", StandingViewSet)
router.register(r"player-match-stats", PlayerMatchStatsViewSet)

urlpatterns = router.urls
