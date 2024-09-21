import PropTypes from "prop-types";
import { RiAuctionFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineFavorite } from "react-icons/md";
import { Caption, PrimaryButton, ProfileCard, Title } from "../common/Design";
import { NavLink } from "react-router-dom";

export const ProductCard = ({ item }) => {
  return (
    <>
      <div className="bg-white shadow-s1 rounded-xl p-3">
        <div className="h-56 relative overflow-hidden">
          <NavLink to={`/details/${item?._id}`}>
            <img src={item?.image} alt={item?.image} className="w-full h-full object-cover rounded-xl hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out" />
          </NavLink>
          <ProfileCard className="shadow-s1 absolute right-3 bottom-3">
            <RiAuctionFill size={22} className="text-green" />
          </ProfileCard>

          <div className="absolute top-0 left-0 p-2 w-full">
            <div className="flex items-center justify-between">
              {item?.isSoldout ? (
                <Caption className="text-red-500 bg-white px-3 py-1 text-sm rounded-full">Sold Out</Caption>
              ) : (
                <Caption className="text-green bg-green_100 px-3 py-1 text-sm rounded-full">On Stock</Caption>
              )}
              <Caption className="text-green bg-green_100 px-3 py-1 text-sm rounded-full">{item?.totalBids} Bids</Caption>
            </div>
          </div>
        </div>
        <div className="details mt-4">
          <Title className="uppercase">{item.title}</Title>
          <hr className="mt-3" />
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center justify-between gap-5">
              <div>
                <RiAuctionFill size={40} className="text-green" />
              </div>
              <div>
                <Caption className="text-green">Current Bid</Caption>
                <Title>${item?.biddingPrice}.00</Title>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-gray-300"> </div>
            <div className="flex items-center justify-between gap-5">
              <div>
                <GiTakeMyMoney size={40} className="text-red-500" />
              </div>
              <div>
                <Caption className="text-red-500">Buy Now</Caption>
                <Title>${item?.price}.00</Title>
              </div>
            </div>
          </div>
          <hr className="mb-3" />

          <div className="flex items-center  justify-between mt-3">
            <PrimaryButton className="rounded-lg text-sm">Place Bid</PrimaryButton>
            <PrimaryButton className="rounded-lg px-4 py-3">
              <MdOutlineFavorite size={20} />
            </PrimaryButton>
          </div>
        </div>
      </div>
      {/*  <div className="bg-white shadow-s1 rounded-xl p-3">
        <div className="h-56 relative overflow-hidden">
          <NavLink to={`/details/${item.product?._id}`}>
            <img src={item.image} alt="" className="w-full h-full object-cover rounded-xl hover:scale-105 hover:cursor-pointer transition-transform duration-300 ease-in-out" />
          </NavLink>
          <ProfileCard className="shadow-s1 absolute right-3 bottom-3">
            <RiAuctionFill size={22} className="text-green" />
          </ProfileCard>

          <div className="absolute top-0 left-0 p-2 w-full">
            <div className="flex items-center justify-between">
              <Caption className="text-red-500 bg-white px-3 py-1 text-sm rounded-full">0d : 4h : 41m : 8s</Caption>
              <Caption className="text-green bg-green_100 px-3 py-1 text-sm rounded-full">30 Bids</Caption>
            </div>
          </div>
        </div>
        <div className="details mt-4">
          <Title className="uppercase">{item.title}</Title>
          <hr className="mt-3" />
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center justify-between gap-5">
              <div>
                <RiAuctionFill size={40} className="text-green" />
              </div>
              <div>
                <Caption className="text-green">Current Bid</Caption>
                <Title>${item.bprice}.00</Title>
              </div>
            </div>
            <div className="w-[1px] h-10 bg-gray-300"> </div>
            <div className="flex items-center justify-between gap-5">
              <div>
                <GiTakeMyMoney size={40} className="text-red-500" />
              </div>
              <div>
                <Caption className="text-red-500">Buy Now</Caption>
                <Title>${item.price}.00</Title>
              </div>
            </div>
          </div>
          <hr className="mb-3" />

          <div className="flex items-center  justify-between mt-3">
            <PrimaryButton className="rounded-lg text-sm">Place Bid</PrimaryButton>
            <PrimaryButton className="rounded-lg px-4 py-3">
              <MdOutlineFavorite size={20} />
            </PrimaryButton>
          </div>
        </div>
      </div> */}
    </>
  );
};

ProductCard.propTypes = {
  item: PropTypes.any,
};
