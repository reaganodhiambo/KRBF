from django.db import models
from accounts.models import User

# Create your models here.
# core/models.py


class Competition(models.Model):
    COMPETITION_TYPES = [
        ("league", "League"),
        ("tournament", "Tournament"),
        ("friendly", "Friendly"),
    ]

    name = models.CharField(max_length=200)
    short_name = models.CharField(max_length=50)
    competition_type = models.CharField(max_length=20, choices=COMPETITION_TYPES)
    season = models.CharField(max_length=20)

    # Competition Details
    start_date = models.DateField()
    end_date = models.DateField()
    description = models.TextField(blank=True)

    # Participating teams
    teams = models.ManyToManyField("clubs.Team", related_name="competitions")

    # Settings
    points_for_win = models.PositiveIntegerField(default=3)
    points_for_draw = models.PositiveIntegerField(default=1)
    points_for_loss = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Fixture(models.Model):
    MATCH_STATUS = [
        ("scheduled", "Scheduled"),
        ("live", "Live"),
        ("completed", "Completed"),
        ("postponed", "Postponed"),
        ("cancelled", "Cancelled"),
    ]

    competition = models.ForeignKey(
        Competition, on_delete=models.CASCADE, related_name="fixtures"
    )
    home_team = models.ForeignKey(
        "clubs.Team", on_delete=models.CASCADE, related_name="home_fixtures"
    )
    away_team = models.ForeignKey(
        "clubs.Team", on_delete=models.CASCADE, related_name="away_fixtures"
    )

    # Match Details
    match_date = models.DateTimeField()
    venue = models.CharField(max_length=200)
    round_number = models.PositiveIntegerField(null=True, blank=True)

    # Officials
    referee = models.ForeignKey(
        "accounts.User",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="referee_fixtures",
    )

    status = models.CharField(max_length=20, choices=MATCH_STATUS, default="scheduled")
    created_at = models.DateTimeField(auto_now_add=True)


class Result(models.Model):
    fixture = models.OneToOneField(
        Fixture, on_delete=models.CASCADE, related_name="result"
    )

    # Final Scores
    home_team_score = models.PositiveIntegerField()
    away_team_score = models.PositiveIntegerField()

    # Match Details
    duration_minutes = models.PositiveIntegerField(
        default=60
    )  # Rollball match duration
    attendance = models.PositiveIntegerField(null=True, blank=True)

    # Result Status
    is_walkover = models.BooleanField(default=False)
    walkover_team = models.ForeignKey(
        "clubs.Team", on_delete=models.SET_NULL, null=True, blank=True
    )

    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Standing(models.Model):
    competition = models.ForeignKey(
        Competition, on_delete=models.CASCADE, related_name="standings"
    )
    team = models.ForeignKey("clubs.Team", on_delete=models.CASCADE)

    # League Table Stats
    position = models.PositiveIntegerField()
    matches_played = models.PositiveIntegerField(default=0)
    wins = models.PositiveIntegerField(default=0)
    draws = models.PositiveIntegerField(default=0)
    losses = models.PositiveIntegerField(default=0)

    goals_for = models.PositiveIntegerField(default=0)
    goals_against = models.PositiveIntegerField(default=0)
    goal_difference = models.IntegerField(default=0)
    points = models.PositiveIntegerField(default=0)

    # Additional info
    form = models.CharField(max_length=10, blank=True)  # e.g., "WWLDW"

    class Meta:
        unique_together = [["competition", "team"]]
        ordering = ["-points", "-goal_difference", "-goals_for"]


class PlayerMatchStats(models.Model):
    """Individual player performance in specific matches"""

    fixture = models.ForeignKey(
        Fixture, on_delete=models.CASCADE, related_name="player_stats"
    )
    player = models.ForeignKey("clubs.Player", on_delete=models.CASCADE)

    # Match Performance
    goals_scored = models.PositiveIntegerField(default=0)
    assists = models.PositiveIntegerField(default=0)
    minutes_played = models.PositiveIntegerField(default=0)
    yellow_cards = models.PositiveIntegerField(default=0)
    red_cards = models.PositiveIntegerField(default=0)

    # Player of the match
    is_player_of_match = models.BooleanField(default=False)
