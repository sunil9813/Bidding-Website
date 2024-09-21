import { TiEyeOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Table = () => {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-5">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Bidding ID
              </th>
              <th scope="col" className="px-6 py-3">
                Bid Amount(USD)
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">Auction Title 01</td>
              <td className="px-6 py-4">Bidding_HvO253gT</td>
              <td className="px-6 py-4">1222.8955</td>
              <td className="px-6 py-4">
                <img className="w-10 h-10" src="https://bidout-react.vercel.app/images/bg/order1.png" alt="Jeseimage" />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green me-2"></div> Success
                </div>
              </td>
              <td className="px-6 py-4 text-center flex items-center gap-3 mt-1">
                <NavLink to="#" type="button" className="font-medium text-indigo-500">
                  <TiEyeOutline size={25} />
                </NavLink>
                <NavLink to="/update-product" type="button" className="font-medium text-green">
                  <CiEdit size={25} />
                </NavLink>
                <button className="font-medium text-red-500">
                  <MdOutlineDeleteOutline size={25} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

/* export const Table = ({ products, handleSellProduct, delProduct, isAdmin, isWon }) => {
  return (
    <>
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-5">
                S.N
              </th>
              <th scope="col" className="px-6 py-5">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Commission
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Bid Amount(USD)
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              {isWon && (
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              )}
              {!isWon && (
                <>
                  <th scope="col" className="px-6 py-3">
                    Verify
                  </th>
                  {!isAdmin && (
                    <th scope="col" className="px-6 py-3">
                      Sold
                    </th>
                  )}
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr className="bg-white border-b hover:bg-gray-50" key={index}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{product?.title?.slice(0, 15)}...</td>
                <td className="px-6 py-4">{product?.commission}%</td>
                <td className="px-6 py-4">{product?.price}</td>
                <td className="px-6 py-4">{product?.biddingPrice}</td>
                <td className="px-6 py-4">
                  <img className="w-10 h-10" src={product?.image?.filePath} alt="Jeseimage" />
                </td>
                {!isWon && (
                  <>
                    <td className="px-6 py-4">
                      {product?.isverify ? (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green me-2"></div> Yes
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> No
                        </div>
                      )}
                    </td>
                    {!isAdmin && (
                      <td className="py-3 px-6">
                        {product?.isSoldout ? (
                          <button className="bg-red-500 text-white py-1 px-3 rounded-lg" disabled>
                            Sold Out
                          </button>
                        ) : (
                          <button
                            className={`py-1 px-3 rounded-lg ${product?.isverify ? "bg-green text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}
                            onClick={() => handleSellProduct(product._id)}
                            disabled={!product?.isverify}
                          >
                            Sell
                          </button>
                        )}
                      </td>
                    )}
                    <td className="px-6 py-4 text-center flex items-center gap-3 mt-1">
                      <NavLink to="#" type="button" className="font-medium text-indigo-500">
                        <TiEyeOutline size={25} />
                      </NavLink>
                      {isAdmin ? (
                        <NavLink to={`/product/admin/update/${product._id}`} className="font-medium text-green">
                          <CiEdit size={25} />
                        </NavLink>
                      ) : (
                        <NavLink to={`/product/update/${product._id}`} className="font-medium text-green">
                          <CiEdit size={25} />
                        </NavLink>
                      )}
                      {!isAdmin && (
                        <button onClick={() => delProduct(product._id)} className="font-medium text-red-500">
                          <MdOutlineDeleteOutline size={25} />
                        </button>
                      )}
                    </td>
                  </>
                )}
                {isWon && (
                  <td className="py-3 px-6">
                    <button className="bg-green text-white py-1 px-3 rounded-lg" disabled>
                      Victory
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}; */
