import Link from 'next/link'

export default () => {

  return (
    <div>
      <h1>Static page</h1>
      <p>Process.env.FANCY: {process.env.FANCY}</p>
      <p>Process.env.APP_ENV: {process.env.APP_ENV}</p>
      <p>Process.env.GAE_APPLICATION: {process.env.GAE_APPLICATION}</p>
      <p>Process.env.GAE_ENV: {process.env.GAE_ENV}</p>
      <p>Process.env.GAE_SERVICE: {process.env.GAE_SERVICE}</p>
      <p>Process.env.NODE_ENV: {process.env.NODE_ENV}</p>
      <Link href="/b">
        <a>Go to dynamic page</a>
      </Link>
    </div>
  );
};
