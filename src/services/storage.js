import {
  EXERCISES_STORAGE_KEY,
  EXERCISE_CHANNEL_KEY,
} from "../constants/storageConstants";

const listeners = [];

export function registerListener(channelKey, listenerCallback) {
  listeners.push({ key: channelKey, callback: listenerCallback });
}

export function addNewExercise(exercise) {
  const existingExercises = getAllExercises();
  const existingExerciseNames = existingExercises.map((e) => e.name);
  if (existingExerciseNames.includes(exercise.name)) {
    throw new Error();
  }
  const newExercises = [...existingExercises, exercise];
  saveExercises(newExercises);
}

export function deleteExercise(exercise) {
  const existingExercises = getAllExercises();
  const newExerciseList = existingExercises.filter(
    (e) => e.name !== exercise.name
  );
  saveExercises(newExerciseList);
}

export function getAllExercises() {
  return JSON.parse(localStorage.getItem(EXERCISES_STORAGE_KEY)) ?? [];
}

function saveExercises(exercises) {
  localStorage.setItem(EXERCISES_STORAGE_KEY, JSON.stringify(exercises));
  listeners
    .filter((listener) => listener.key === EXERCISE_CHANNEL_KEY)
    .forEach((listener) => {
      listener.callback(exercises);
    });
}
