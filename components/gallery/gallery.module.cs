.gallery-container {
  padding: 2rem;
  text-align: center;
}

.gallery-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.theme-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.theme-card:hover {
  transform: scale(1.05);
}

.theme-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.theme-title {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.theme-description {
  font-size: 1rem;
  color: #555;
  padding: 0 1rem;
}

.theme-link {
  display: inline-block;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  background: #0070f3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;
}

.theme-link:hover {
  background: #005bb5;
}
