import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const entryElements = data.map((entry) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <Entry
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
      />
    );
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
