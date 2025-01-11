import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry
          img={{ src: "src/assets/mount-fuji.png", alt: "mount fuji" }}
          country="Janap"
          title="Mount Fuji"
          googleMapLink="https://g.co/kgs/yrwrm7F"
          dates="12 Jan, 2023 - 24 Jan, 2023"
          text="Mount Fuji is the tallest mountain in Japan, 
          standing at 3,776 meters (12,380 feet). Mount Fuji is 
          the single most popular tourist site in Japan, for both 
          Japanese and foreign tourists."
        />
        <Entry
          img={{
            src: "src/assets/sydney-opera-house.png",
            alt: "sydney opera house",
          }}
          country="Australia"
          title="Sydney Opera House"
          oogleMapLink=""
          dates="27 May, 2023 - 8 Jun, 2023"
          text="The Sydney Opera House is a multi-venue 
          performing arts centre in Sydney. Located on the banks 
          of the Sydney Harbour, it is often regarded as one of 
          the 20th century's most famous and distinctive buildings."
        />
        <Entry
          img={{
            src: "src/assets/geirangerfjord.png",
            alt: "sydney opera house",
          }}
          country="Norway"
          title="Geirangerfjord"
          oogleMapLink=""
          dates="01 Oct, 2024 - 18 Nov, 2024"
          text="The Geiranger Fjord is a fjord in the Sunnmøre 
          region of Møre og Romsdal county, Norway. It is located 
          entirely in the Stranda Municipality."
        />
      </main>
    </>
  );
}
