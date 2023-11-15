export default function Profile({ user }) {
  console.log(user);

  return <p>{JSON.stringify(user, null, 2)}</p>;
}
