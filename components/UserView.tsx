import { ArrowLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";
import User from "../types/User";

type Props = {
  user: User,
  setUser:  React.Dispatch<React.SetStateAction<User|undefined|null>>
}

const UserView = (({user, setUser} : Props) => {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="py-6 cursor-pointer" onClick={() => setUser(null)}>
            <ArrowLeftIcon className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              <Image className="rounded-full" src={user?.picture.medium} width="50" height="50" alt="" />
            </div>

            <h3 className="ml-4 text-lg leading-6 font-medium text-gray-900">
              {user?.name.first} {user?.name.last}
            </h3>
          </div>
        
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details.</p>
        </div>

        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email
              </dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.email}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Gender
              </dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.gender}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Phone
              </dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.phone}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Street
              </dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.location.street.name} - {user?.location.street.number}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Postcode
              </dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.location.postcode}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                City
              </dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.location.city}
              </dd>
            </div>

            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                State
              </dt>

              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user?.location.state}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    );
});

export default UserView;