import { RESTAURANT_IMG_URL } from "../utils/constants";

const RestroCard = ({ restro }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = restro?.info;
  return (
    <div className="restro-card">
      <img
        src={`${RESTAURANT_IMG_URL}/${cloudinaryImageId}`}
        alt="recipe-img"
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{sla.slaString}</h4>
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default RestroCard;
