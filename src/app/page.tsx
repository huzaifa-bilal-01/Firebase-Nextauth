'use client'

import { collection, query } from "firebase/firestore";
import {useCollection} from 'react-firebase-hooks/firestore'
import { signOut, useSession } from "next-auth/react";
import { db } from './firebase'

export default function Home() {
  const session = useSession();

  const [users, loading, error] = useCollection(query(collection(db, 'users')));
  

  return (
    <div className="w-72 bg-white rounded-lg shadow-lg p-4 mx-auto mt-20">
      <div className="text-center">
        <div className="rounded-full w-20 h-20 bg-gray-200 mx-auto mb-4 overflow-hidden">
          {session.data?.user?.image ? (
            <img
              src={session.data.user.image}
              className="object-cover w-full h-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-full h-full text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M10 2a5 5 0 00-5 5v.293a1 1 0 01-.293.293A7 7 0 1010 2zm0 2a3 3 0 100 6 3 3 0 000-6z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M2.293 13.293a1 1 0 011.414-1.414A5 5 0 0010 18a5 5 0 005-5v-.293a1 1 0 111.414 1.414A7 7 0 012 13.293z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <h1 className="text-slate-400 text-2xl">{session.data?.user?.name}</h1>
        <p>{users?.docs[0].data().email}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-200"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
