const express = require("express");
const app = express();

app.use(express.json());

const routes = [
  { id: 1, name: "Hostel to Academic Block", status: "On Time", eta: "10:30 AM" },
  { id: 2, name: "Hostel to Library", status: "Delayed", eta: "11:00 AM" },
  { id: 3, name: "Gate to Admin Block", status: "On Time", eta: "10:15 AM" }
];


app.get("/routes/:id/status", (req, res) => {
  const route = routes.find(r => r.id === Number(req.params.id));

  if (!route) {
    return res.status(404).json({ message: "Route not found" });
  }
  res.json(route);
});

app.post("/status/update", (req, res) => {
  const { routeId, status, eta } = req.body;
  const route = routes.find(r => r.id == routeId);
  if (!route) {
    return res.status(404).json({ message: "Route not found" });
  }
  route.status = status;
  route.eta = eta;
  res.json({ message: "Updated", route });
});

app.use(express.static('public'));   // serve frontend

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});
