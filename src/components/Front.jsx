import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import bgImage from '../img/bg.jpg';

export default function Front() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8"></h1>

      </div>
    </div>
  );
}
