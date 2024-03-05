import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { addNewExercise } from "../../services/storage";

function ExerciseEntryForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [trackWeight, setTrackWeight] = useState(true);
  const [trackReps, setTrackReps] = useState(true);
  const [trackDuration, setTrackDuration] = useState(false);
  const [trackDistance, setTrackDistance] = useState(false);

  const curryTextHandler = (setFunction) => {
    return (event) => {
      setFunction(event.target.value);
    };
  };

  const curryCheckboxHandler = (setFunction) => {
    return (event) => {
      setFunction(event.target.checked);
    };
  };

  const handleSave = () => {
    addNewExercise({
      name: name,
      description: description,
      trkWeight: trackWeight,
      trkReps: trackReps,
      trkDur: trackDuration,
      trkDist: trackDistance,
    });
    setName("");
    setDescription("");
    setTrackWeight(true);
    setTrackReps(true);
    setTrackDuration(false);
    setTrackDistance(false);
  };

  const handleDiscard = () => {
    setName("");
    setDescription("");
    setTrackWeight(true);
    setTrackReps(true);
    setTrackDuration(false);
    setTrackDistance(false);
  };

  return (
    <Card sx={{ width: "100%", padding: "8px", marginLeft: "-8px" }}>
      <CardHeader
        title={<Typography variant="h5">Add a new exercise</Typography>}
      />
      <CardContent>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <TextField
              label="Exercise name"
              sx={{ width: "100%" }}
              value={name}
              onChange={curryTextHandler(setName)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Description"
              multiline
              sx={{ width: "100%" }}
              minRows={2}
              value={description}
              onChange={curryTextHandler(setDescription)}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  value={trackWeight}
                  onChange={curryCheckboxHandler(setTrackWeight)}
                />
              }
              label="Track weight"
            />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  value={trackReps}
                  onChange={curryCheckboxHandler(setTrackReps)}
                />
              }
              label="Track reps"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={trackDuration}
                  onChange={curryCheckboxHandler(setTrackDuration)}
                />
              }
              label="Track duration"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={trackDistance}
                  onChange={curryCheckboxHandler(setTrackDistance)}
                />
              }
              label="Track distance"
            />
          </Grid>
          <Grid item>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDiscard}
                >
                  Discard
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ExerciseEntryForm;
