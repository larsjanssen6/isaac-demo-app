import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import User from '../types/User';
import UserList from '../components/UserList';
import UserView from '../components/UserView';

type Props = {
  users: {
    results: User[]
  }
}

interface HttpResponse<T> extends Response {
  results?: T;
}

export async function http<T>(
  request: RequestInfo
): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(
    request
  );

  response.results = await response.json();
  return response;
}

export async function getServerSideProps() {
  const data = await http<User[]>(
    "https://randomuser.me/api?results=10"
  );
  
  return { props: { users: data.results } }
}

const Home: NextPage =  (({users} : Props) => {
  const { results } = users;

  const [selectedUser, setSelectedUser] = useState<User>();

  return (
    <div>
      <Head>
        <title>IO</title>
        <meta name="description" content="IO demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mx-auto max-w-7xl mt-12">
          {
            selectedUser ? (
              <UserView user={selectedUser} setUser={setSelectedUser} />
            ) : (
              <UserList users={results} setUser={setSelectedUser} />
            )
          }
        </div>
      </main>
    </div>
  )
});

export default Home
