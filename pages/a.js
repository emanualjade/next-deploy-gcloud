import Link from 'next/link'

export default () => {

  return (
    <div>
      <h1>I am a static page</h1>
      <p>Process.env.FANCY: {process.env.FANCY}</p>
      <p>Process.env.SOME_NUMBER: {process.env.SOME_NUMBER}</p>
      <p>Process.env.NODE_ENV: {process.env.NODE_ENV}</p>
      <p>Process.env.GRAPHQL_BACKEND_ENDPOINT: {process.env.GRAPHQL_BACKEND_ENDPOINT}</p>
      <p>Process.env.APP_VERSION: {process.env.APP_VERSION}</p>
      <Link href="/b">
        <a>Go to dynamic page</a>
      </Link>
    </div>
  );
};
