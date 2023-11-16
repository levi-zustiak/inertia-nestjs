import { router } from 'inertia-solid';
import { io } from 'socket.io-client';

// const socket = io('localhost:3000');

export default function Home(props) {
  const handleNavigate = () => {
    router.get('/profile');
  };

  const handleSocket = () => {
    // socket.emit('foo', 'bar');
  };

  return (
    <div>
      <button onClick={handleNavigate}>Navigate</button>
      <button onClick={handleSocket}>Socket</button>
    </div>
  );
}
