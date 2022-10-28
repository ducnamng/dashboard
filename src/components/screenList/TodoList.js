import { Grid, Paper, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

export default function TodoList() {
  const storageJobs = JSON.parse(localStorage.getItem("todos"));
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(storageJobs ?? []);

  const removeElement = (index) => {
    const array = todos.filter((item, i) => i !== index);
    localStorage.setItem("todos", JSON.stringify(array));
    setTodos(array);
  };

  const handelSubmit = () => {
    if (todo.length > 0) {
      setTodos((prev) => {
        const newTodos = [...prev, todo];
        const jsonTodos = JSON.stringify(newTodos);
        localStorage.setItem("todos", jsonTodos);

        return newTodos;
      });
      setTodo("");
    } else {
      alert("This is a warning alert — check it out!");
    }
  };

  return (
    <div>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid xs={12} lg={8}>
          <Paper sx={{ padding: "16px", marginTop: "10px" }}>
            <Box
              sx={{
                fontSize: "1.25rem",
                paddingBottom: "15px",
                fontWeight: "700",
                opacity: "1",
                textTransform: "none",
                verticalAlign: "unset",
                textDecoration: "none",
                color: "rgb(52, 71, 103)",
              }}
            >
              TodoList
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                id="outlined-basic"
                label="Passwork"
                variant="outlined"
                sx={{
                  color: "rgb(210, 214, 218)",
                  fontSize: "14px",
                  width: "100%",
                }}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <Button
                variant="contained"
                sx={{ marginLeft: "10px" }}
                onClick={handelSubmit}
              >
                Add
              </Button>
            </Box>

            <Box sx={{ marginTop: " 20px" }}>
              <ul style={{ listStyleType: "none" }}>
                {todos.map((todo, index) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "20px 10px",
                      margin: "10px 0",
                      background:
                        "linear-gradient(195deg, rgb(255, 167, 38), rgb(251, 140, 0))",
                      borderRadius: "12px",
                      color: "#fff",
                    }}
                  >
                    <li key={index}>{todo}</li>
                    {<ClearIcon onClick={() => removeElement(index)} />}
                  </Box>
                ))}
              </ul>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
