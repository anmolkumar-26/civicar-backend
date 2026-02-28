let reportCount = 0;
let currentLocation = "";

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
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;
      currentLocation = `Lat: ${lat}, Lng: ${lon}`;

      document.getElementById("location").innerHTML =
        `📍 ${currentLocation} <br>
         <a href="https://maps.google.com/?q=${lat},${lon}" target="_blank">
         View on Google Maps</a>`;
    },
    () => alert("Location access denied")
  );
}

/* FORM SUBMIT */
document.getElementById("reportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  reportCount++;
  document.getElementById("reports").innerText = reportCount;

  document.getElementById("result").innerHTML =
    "✅ Issue submitted successfully! Authorities notified.";

  this.reset();
  document.getElementById("preview").src = "";
});
