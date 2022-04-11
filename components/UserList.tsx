import { ChevronDownIcon, ChevronUpIcon, EyeIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSortableDataHook from "../hooks/useSortableDataHook";
import User from "../types/User";

type Props = {
  users: User[],
  setUser:  React.Dispatch<React.SetStateAction<User | undefined>>
}

const UserList = (({users, setUser} : Props) => {
  const { items, requestSort, sortConfig } =  useSortableDataHook(users);

  const [filterByGender, setFilterByGender] = useState<String|null>(null);

  const [resultList, setResultList] = useState<Array<User>>([]);

  useEffect(() => {
    if (filterByGender) {
      setResultList(items.filter((i: User) => i.gender == filterByGender));
    }

    else {
      setResultList(items);
    }
  }, [items, filterByGender]);

  return (
    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <div className="flex justify-end p-4">
            <div>
              <button
                type="button"
                className="cursor-pointer inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setFilterByGender(filterByGender == 'male' ? null : "male")}
              >
                Filter by male
              </button>

              <button
                type="button"
                className="ml-2 cursor-pointer inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                onClick={() => setFilterByGender(filterByGender == 'female' ? null : "female")}
              >
                Filter by female
              </button>
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" onClick={() => requestSort('name.first')}>
                  Name
                </th>

                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer">
                  <span className="group inline-flex" onClick={() => requestSort('gender')}>
                    Gender

                   {
                     sortConfig?.key == 'gender' && sortConfig.direction == 'ascending' ? (
                        <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                          <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                     ) : (
                        <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                     )
                   }
                  </span>
                </th>

                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 cursor-pointer">
                  <span className="group inline-flex" onClick={() => requestSort('phone')}>
                    Phone

                   {
                     sortConfig?.key == 'phone' && sortConfig.direction == 'ascending' ? (
                        <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                          <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                     ) : (
                        <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
                        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                     )
                   }
                  </span>
                </th>
            
                <th></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {
                  resultList.map((user: User) => {
                    return (
                      <tr className="cursor-pointer" key={user.email} onClick={() => setUser(user)}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex-shrink-0">
                              <Image className="rounded-full" src={user.picture.medium} width="50" height="50" alt="" />
                            </div>

                            <div className="ml-4">
                              <div className="font-medium text-gray-900">
                                {user.name.first} {user.name.last}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {user.gender}
                          </div>
                        </td>

                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="text-gray-900">
                            {user.phone}
                          </div>
                        </td>

                        <td className="px-3 py-4 text-sm text-gray-500 cursor-pointer">
                          <EyeIcon className="h-5 w-5" aria-hidden="true" />
                        </td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
});

export default UserList;