async function loadStatus() {
  const routeId = document.getElementById("routeSelect").value;
  const res = await fetch(`/routes/${routeId}/status`);

  const data = await res.json();
  document.getElementById("name").innerText = data.name;
  document.getElementById("status").innerText = data.status;
  document.getElementById("eta").innerText = data.eta;
  const statusEl = document.getElementById("status");
  if (data.status === "On Time") {
    statusEl.style.color = "green";
  } else {
    statusEl.style.color = "#E00000";
  }
}

loadStatus();
setInterval(loadStatus, 10000); // 10 seconds
