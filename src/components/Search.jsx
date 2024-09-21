/* import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../redux/fetaures/categorySlice";
import { Loader } from "./common/Loader";
import { getAllProduct } from "../redux/fetaures/productSlice";

export const Search = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const storeData = useSelector((state) => state?.category);
  const { loading, categorys } = storeData;

  const handleCategoryClick = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    dispatch(getAllProduct(categoryTitle));
  };
  const handleViewAllClick = () => {
    setSelectedCategory(""); // Clear the selected category
    dispatch(getAllProduct(""));
  };
  return (
    <>
      <section className="search">
        {loading && <Loader />}
        <div className="content">
          <h1>Create Your Project</h1>
          <p>Search and download any images within a second</p>
          <ul className="flex justify-between items-center mt-5">
            <div>
              {selectedCategory ? (
                <button
                  className="flex justify-between gap-2 items-center text-sm bg-slate-950/20 cursor-pointer py-1.5 rounded-md px-4 transition-colors ease-in-out duration-200 delay-200"
                  onClick={handleViewAllClick}
                >
                  View ALL
                </button>
              ) : (
                <button
                  className={`flex justify-between gap-2 items-center text-sm bg-green-500 cursor-pointer py-1.5 rounded-md px-4 transition-colors ease-in-out duration-200 delay-200`}
                  onClick={handleViewAllClick}
                >
                  View ALL
                </button>
              )}
            </div>
            {categorys &&
              categorys?.map((category) =>
                selectedCategory === category?.title ? (
                  <button
                    key={category._id}
                    onClick={() => handleCategoryClick(category?.title)}
                    className="flex justify-between gap-2 items-center text-sm bg-green-500 cursor-pointer py-1.5 rounded-md px-4 transition-colors ease-in-out duration-200 delay-200"
                  >
                    <h4 className="flex justify-between items-center gap-4 text-[12px] capitalize">
                      <span>{category?.title}</span>
                    </h4>
                  </button>
                ) : (
                  <button
                    key={category._id}
                    onClick={() => handleCategoryClick(category?.title)}
                    className="flex justify-between gap-2 items-center text-sm bg-slate-950/20 cursor-pointer py-1.5 rounded-md px-4 transition-colors ease-in-out duration-200 delay-200"
                  >
                    <h4 className="flex justify-between items-center gap-4 text-[12px] capitalize">
                      <span>{category?.title}</span>
                    </h4>
                  </button>
                )
              )}
          </ul>
        </div>
      </section>
    </>
  );
};
 */
