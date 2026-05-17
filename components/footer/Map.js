import { useEffect, useRef } from "react";
import styles from "./Map.module.css";

/**
 * Map Component
 * Displays the organization's location on an interactive map
 * Uses Leaflet (OpenStreetMap) - lightweight and no API key needed
 *
 * Location: Lagankhel, Lalitpur, Nepal
 * Coordinates: 27.6160°N, 85.2985°E
 */

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // Check if Leaflet is already loaded
    if (typeof window.L === "undefined") {
      console.error(
        "Leaflet library not loaded. Make sure to include Leaflet CSS and JS in your _document.js",
      );
      return;
    }

    // Only initialize map once
    if (map.current) return;

    const L = window.L;
    // Organization location coordinates
    const organizationLat = 27.66857149381509;
    const organizationLng = 85.32349579611025;
    const organizationLocation = [organizationLat, organizationLng];

    // Initialize map
    map.current = L.map(mapContainer.current).setView(organizationLocation, 16);

    // Add tile layer (OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19,
      minZoom: 10,
    }).addTo(map.current);

    // Create custom marker icon
    const customIcon = L.divIcon({
      html: `
        <div class="${styles.marker}">
          <div class="${styles.markerInner}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="white"/>
              <circle cx="12" cy="9" r="2.5" fill="#5a0016"/>
            </svg>
          </div>
          <div class="${styles.pulse}"></div>
        </div>
      `,
      className: styles.customMarker,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    // Add marker at organization location
    const marker = L.marker(organizationLocation, {
      icon: customIcon,
      title: "Vision Beauty Academy",
    }).addTo(map.current);

    // Add popup to marker
    marker.bindPopup(`
      <div class="${styles.popup}">
        <h4>Vision Beauty Academy</h4>
        <p><strong>📍 Location:</strong> Lagankhel, Lalitpur</p>
        <p><strong>📞 Phone:</strong> <a href="tel:+9779861118272">+977 9861118272</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:info@beautyacademy.com">info@beautyacademy.com</a></p>
        <a href="https://maps.google.com/?q=27.6160,85.2985" target="_blank" rel="noopener noreferrer" class="${styles.directionsLink}">
          Get Directions →
        </a>
      </div>
    `);

    // Optional: Auto-open popup on load
    marker.openPopup();

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className={styles.mapWrapper}>
      <div className={styles.mapContainer} ref={mapContainer} />
      <div className={styles.mapFooter}>
        <p>Click the marker to see contact information</p>
      </div>
    </div>
  );
};

export default Map;
