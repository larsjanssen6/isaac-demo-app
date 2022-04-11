import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import User from '../types/User';
import UserList from '../components/UserList';
import UserView from '../components/UserView';
import Alert from '../components/Alert';

type Props = {
  users: {
    results: User[]
  },
  error: string|null
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
  let data = null;
  
  const response = await fetch('https://randomuser.me/api?results=10');

  if (response.status == 200) {
    data = await response.json();
    return { props: { users: {results: data.results}, error: null } }
  }

  else {
    return { props: { users: {results: []}, error: 'Something went wrong while fetching data.' } }
  }
}

const Home: NextPage =  (({users, error = null} : Props) => {
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
            error ? (
              <Alert title={error} />
            ) : (
              selectedUser ? (
                <UserView user={selectedUser} setUser={setSelectedUser} />
              ) : (
                <UserList users={results} setUser={setSelectedUser} />
              )
            )
          }
        </div>
      </main>
    </div>
  )
});

export default Home
