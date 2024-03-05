import React, { useState } from "react";
import "./App.css";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "./components/TabPanel";
import ExercisesTab from "./components/Exercises/ExercisesTab";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Plan" />
          <Tab label="Exercises" />
          <Tab label="Stats" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}>
        <ExercisesTab />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>2</div>
      </TabPanel>
    </Box>
  );
}

export default App;
