import Link from 'next/link'

export default () => {

  return (
    <div>
      <h1>I am a static page</h1>
      <p>Process.env.FANCY: {process.env.FANCY}</p>
      <p>Process.env.NODE_ENV: {process.env.NODE_ENV}</p>
      <Link href="/b">
        <a>Go to dynamic page</a>
      </Link>
    </div>
  );
};
