import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import {
  ExpandMoreOutlined,
  FitnessCenter,
  Straighten,
  Tag,
  Timer,
} from "@mui/icons-material";
import { deleteExercise } from "../../services/storage";

function ExerciseAccordionDisplay(props) {
  const { exercises } = props;

  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const curryHandleDelete = (exercise) => {
    return () => {
      deleteExercise(exercise);
    };
  };

  return (
    <>
      {exercises &&
        exercises.map((ex) => {
          return (
            <Accordion
              key={ex.name}
              expanded={expanded === ex.name}
              onChange={handleChange(ex.name)}
              disableGutters
            >
              <AccordionSummary
                id={ex.name}
                expandIcon={<ExpandMoreOutlined />}
              >
                {ex.name}
              </AccordionSummary>
              <Grid container direction="column" sx={{ paddingX: "16px" }}>
                <Grid item sx={{ marginBottom: "8px" }}>
                  <Typography>{ex.description}</Typography>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="space-around"
                  sx={{ marginBottom: "8px" }}
                >
                  <Grid item>
                    <FitnessCenter
                      color={ex.trkWeight ? "primary" : "disabled"}
                    />
                  </Grid>
                  <Grid item>
                    <Tag color={ex.trkReps ? "primary" : "disabled"} />
                  </Grid>
                  <Grid item>
                    <Timer color={ex.trkDur ? "primary" : "disabled"} />
                  </Grid>
                  <Grid item>
                    <Straighten color={ex.trkDist ? "primary" : "disabled"} />
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  justifyContent="flex-start"
                  sx={{ marginBottom: "8px" }}
                >
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={curryHandleDelete(ex)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Accordion>
          );
        })}
    </>
  );
}

export default ExerciseAccordionDisplay;
