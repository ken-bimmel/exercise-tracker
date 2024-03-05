import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getAllExercises, registerListener } from "../../services/storage";
import ExerciseEntryForm from "./ExerciseEntryForm";
import { EXERCISE_CHANNEL_KEY } from "../../constants/storageConstants";
import ExerciseAccordionDisplay from "./ExerciseAccordionDisplay";

function ExercisesTab() {
  const [allExercises, setAllExercises] = useState(getAllExercises() ?? []);

  useEffect(() => {
    registerListener(EXERCISE_CHANNEL_KEY, (exercises) => {
      setAllExercises(exercises);
    });
  }, []);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item width={"100%"}>
        <ExerciseEntryForm />
      </Grid>
      <Grid item width={"100%"}>
        <ExerciseAccordionDisplay exercises={allExercises} />
      </Grid>
    </Grid>
  );
}

export default ExercisesTab;
