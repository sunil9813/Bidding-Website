import { NavLink } from "react-router-dom";
import { Title, ProfileCard } from "../router";
import { TiEyeOutline } from "react-icons/ti";
import { User2 } from "../components/hero/Hero";

export const UserList = () => {
  return (
    <section className="shadow-s1 p-8 rounded-lg">
      <div className="flex justify-between">
        <Title level={5} className=" font-normal">
          User Lists
        </Title>
      </div>
      <hr className="my-5" />
      <div className="relative overflow-x-auto rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-5">
                S.N
              </th>
              <th scope="col" className="px-6 py-5">
                Username
              </th>
              <th scope="col" className="px-6 py-5">
                Email
              </th>
              <th scope="col" className="px-6 py-5">
                Role
              </th>
              <th scope="col" className="px-6 py-5">
                Photo
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3 flex justify-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4 capitalize">Sunil BK</td>
              <td className="px-6 py-4">example@gmail.com</td>
              <td className="px-6 py-4 capitalize">Admin</td>
              <td className="px-6 py-4">
                <ProfileCard>
                  <img src={User2} alt={User2} />
                </ProfileCard>
              </td>
              <td className="px-6 py-4">Dec 20 2024</td>
              <td className="py-4 flex justify-end px-8">
                <NavLink to="#" type="button" className="font-medium text-indigo-500">
                  <TiEyeOutline size={25} />
                </NavLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
