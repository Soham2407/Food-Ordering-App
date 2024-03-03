import { useState } from "react";
import { restaurants } from "../utils/mockdata";
import RestroCard from "./RestroCard";

const Body = () => {
  const [restroList, setRestroList] = useState(restaurants);

  const ratingFilterHandler = () => {
    const filteredRestro = restaurants.filter(
      (restro) => restro.info.avgRating >= 4.5
    );
    setRestroList(filteredRestro);
  };

  return (
    <main className="content">
      {/* <div className="search">search bar</div> */}
      <button onClick={ratingFilterHandler}>Filter: Rating &gt; 4.5</button>
      <div className="restro-container">
        {restroList?.map((restro) => (
          <RestroCard key={restro.info.id} restro={restro} />
        ))}
      </div>
    </main>
  );
};

export default Body;
