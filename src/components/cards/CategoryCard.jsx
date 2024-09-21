import PropTypes from "prop-types";
import { Title } from "../common/Design";

export const CategoryCard = ({ item }) => {
  return (
    <>
      <div className="flex items-center flex-col gap-2 py-8 rounded-lg bg-green_1000 shadow-s1">
        <div className="h-24">
          <img src={item.image} alt="" className="w-full h-full object-contain" />
        </div>
        <Title className=" uppercase">{item.title}</Title>
      </div>
    </>
  );
};

CategoryCard.propTypes = {
  item: PropTypes.any,
};
