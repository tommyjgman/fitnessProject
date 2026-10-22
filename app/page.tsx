"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [workouts, setWorkouts] = useState(0);
  const [weeklyGoal, setWeeklyGoal] = useState(4);

  const progress = Math.min((workouts / weeklyGoal) * 100, 100);

  function logWorkout() {
    setWorkouts((previous) => previous + 1);
  }

  function undoWorkout() {
    setWorkouts((previous) => Math.max(0, previous - 1));
  }

  function increaseGoal() {
    setWeeklyGoal((previous) => Math.min(7, previous + 1));
  }

  function decreaseGoal() {
    setWeeklyGoal((previous) => Math.max(1, previous - 1));
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Fitness Accountability</h1>
      <p className={styles.subtitle}>
        Track your progress and stay accountable.
      </p>

      <section className={styles.card} aria-labelledby="goal-heading">
        <h2 id="goal-heading">Workouts Per Week</h2>

        <div className={styles.goalControls}>
          <button
            type="button"
            onClick={decreaseGoal}
            disabled={weeklyGoal === 1}
            className={styles.goalButton}
            aria-label="Decrease weekly goal"
          >
            −
          </button>

          <span>{weeklyGoal}</span>

          <button
            type="button"
            onClick={increaseGoal}
            disabled={weeklyGoal === 7}
            className={styles.goalButton}
            aria-label="Increase weekly goal"
          >
            +
          </button>
        </div>

        <div className={styles.progressLabel}>
          <span>Weekly Progress</span>
          <span>{workouts} / {weeklyGoal}</span>
        </div>

        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-label="Weekly workout progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={logWorkout}
            className={styles.logButton}
          >
            Log Workout
          </button>

          <button
            type="button"
            onClick={undoWorkout}
            disabled={workouts === 0}
            className={styles.undoButton}
          >
            Undo
          </button>
        </div>

        {workouts >= weeklyGoal && (
          <p className={styles.success}>Weekly goal achieved!</p>
        )}
      </section>
    </main>
  );
}