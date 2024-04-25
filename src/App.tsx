import { useState, useEffect } from 'react';
import image from '../public/hardy.jpg';

function App() {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-06-04T07:00:00-03:00');
    const interval = setInterval(() => {
      const remainingDate = targetDate.getTime() - new Date().getTime();
      const days = Math.floor(remainingDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingDate % (1000 * 60)) / 1000);

      setTimeRemaining(`${days.toString().padStart(2, '0')} dias, ${hours.toString().padStart(2, '0')} horas, ${minutes.toString().padStart(2, '0')} minutos e ${seconds.toString().padStart(2, '0')} segundos`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div>
        <img src={image} alt="hardy triste com essa vida, essa dor, essa AGONIA" />
        <h1>Quando esse sofrimento vai acabar?</h1>
        <p>{timeRemaining}</p>
      </div>
    </div>
  );
}

export default App;