export function openMaps() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Check if the user is using an iOS device
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "maps://maps.apple.com/?q=40+York+Road+Suite+250+Towson+MD+21204";
  }
  // Check if the user is using an Android device
  else if (/android/i.test(userAgent)) {
    window.location.href = "geo:0,0?q=40+York+Road+Suite+250+Towson+MD+21204";
  }
  // Fallback for other devices
  else {
    window.open("https://maps.google.com/?q=40+York+Road+Suite+250+Towson+MD+21204", "_blank");
  }
}
