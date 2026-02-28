let reportCount = 0;
let lat = "";
let lon = "";

function scrollToDemo() {
  document.getElementById("demo").scrollIntoView({ behavior: "smooth" });
}

/* PHOTO PREVIEW */
document.getElementById("photoInput").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("preview");

  if (file) {
    preview.src = URL.createObjectURL(file);
  }
});

/* LOCATION */
function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      lat = pos.coords.latitude;
      lon = pos.coords.longitude;

      document.getElementById("location").innerHTML =
        `📍 Lat: ${lat}, Lng: ${lon} <br>
         <a href="https://maps.google.com/?q=${lat},${lon}" target="_blank">
         View on Google Maps</a>`;
    },
    () => alert("Location access denied")
  );
}

/* FORM SUBMIT */
document.getElementById("reportForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  if (!lat || !lon) {
    alert("Please click Get Location first");
    return;
  }

  const title = document.getElementById("title").value;
  const description = document.getElementById("issue").value; // FIXED
  const type = document.getElementById("type").value;

  try {
    const response = await fetch("https://civicar-backend.onrender.com/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        type,
        latitude: lat,
        longitude: lon
      })
    });

    const result = await response.json();

    if (result.success) {
      reportCount++;
      document.getElementById("reports").innerText = reportCount;
      alert("Report Submitted 🚀");
      this.reset();
      document.getElementById("preview").src = "";
      document.getElementById("location").innerHTML = "";
    } else {
      alert("Server error ❌");
    }

  } catch (error) {
    console.error("FETCH ERROR:", error);
    alert("Submission failed ❌");
  }
});