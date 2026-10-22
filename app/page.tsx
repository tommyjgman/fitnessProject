
"use client";

import { useState } from "react";

export default function Home() {
  const [workouts, setWorkouts] = useState(0);
  const weeklyGoal = 4;

  const progress = Math.min(
    (workouts / weeklyGoal) * 100,
    100
  );

  function logWorkout() {
    setWorkouts((previous) => previous + 1);
  }

  return (
    <main className="min-h-screen p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">
        Fitness Accountability
      </h1>

      <p className="text-gray-500 mb-8">
        Track your progress and stay accountable.
      </p>

      <div className="border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">
          Your Weekly Goal
        </h2>

        <p className="text-2xl font-bold mb-4">
          {workouts} / {weeklyGoal} workouts
        </p>

        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div
            className="bg-green-500 h-4 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={logWorkout}
          className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
        >
          Log Workout
        </button>

        {workouts >= weeklyGoal && (
          <p className="text-green-600 font-semibold mt-4">
            Weekly goal achieved!
          </p>
        )}
      </div>
    </main>
  );
}
