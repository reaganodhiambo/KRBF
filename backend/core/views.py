from django.shortcuts import render
from rest_framework import viewsets
from .models import Competition, Fixture, Result, Standing, PlayerMatchStats
from .serializers import (
    CompetitionSerializer,
    FixtureSerializer,
    ResultSerializer,
    StandingSerializer,
    PlayerMatchStatsSerializer,
)

# Create your views here.


class CompetitionViewSet(viewsets.ModelViewSet):
    queryset = Competition.objects.all()
    serializer_class = CompetitionSerializer


class FixtureViewSet(viewsets.ModelViewSet):
    queryset = Fixture.objects.all()
    serializer_class = FixtureSerializer


class ResultViewSet(viewsets.ModelViewSet):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer


class StandingViewSet(viewsets.ModelViewSet):
    queryset = Standing.objects.all()
    serializer_class = StandingSerializer


class PlayerMatchStatsViewSet(viewsets.ModelViewSet):
    queryset = PlayerMatchStats.objects.all()
    serializer_class = PlayerMatchStatsSerializer
