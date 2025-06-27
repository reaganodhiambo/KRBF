from rest_framework import serializers
from .models import Competition, Fixture, Result, Standing, PlayerMatchStats


class CompetitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Competition
        fields = "__all__"


class FixtureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fixture
        fields = "__all__"


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = "__all__"


class StandingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Standing
        fields = "__all__"


class PlayerMatchStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerMatchStats
        fields = "__all__"
