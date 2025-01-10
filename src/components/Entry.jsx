export default function Entry() {
  return (
    <article className="journal-entry">
      <img
        className="main-image"
        src="src/assets/mount-fuji.png"
        alt="mount fuji"
      />
      <div className="info-container">
        <img
          className="marker"
          src="src/assets/marker.png"
          alt="map marker icon"
        />
        <span className="country">Japan</span>
        <a href="https://g.co/kgs/yrwrm7F">View on Google Maps</a>
        <h2 className="entry-title">Mount Fuji</h2>
        <p className="trip-dates">12 Jan, 2023 - 24 Jan, 2023</p>
        <p className="entry-dates">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </article>
  );
}
