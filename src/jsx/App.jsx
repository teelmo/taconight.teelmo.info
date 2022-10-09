import React, { useEffect } from 'react';
import '../styles/styles.less';

import Confetti from 'react-confetti';

function App() {
  const counter = () => {
    // The data/time we want to countdown to
    const countDownDate = new Date('May 29, 2022 18:30:00').getTime();

    // Run myfunc every second
    const myfunc = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;

      // Calculating the days, hours, minutes and seconds left
      // const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      // Result is output to the specific element
      document.getElementById('hours').innerHTML = `${hours}h `;
      document.getElementById('mins').innerHTML = `${minutes}m `;
      document.getElementById('secs').innerHTML = `${seconds}s `;

      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById('hours').innerHTML = '';
        document.getElementById('mins').innerHTML = '';
        document.getElementById('secs').innerHTML = '';
        document.getElementById('message').innerHTML = 'YOU ARE LATE OR PRESENT!!';
      }
    }, 1000);
  };
  useEffect(() => {
    counter();
  }, []);
  return (
    <div className="app">
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle className="rain" />
      <div className="image_container"><img src="./assets/img/mexican.gif" alt="Mexican meme" /></div>
      <h3>HOMBRES AND AMIGO&shy;RETTES!</h3>
      <h1>FISH TACO NIGHT</h1>
      <h3>Vamos!</h3>
      <div className="image_container"><img src="./assets/img/taco4.gif" alt="Mexican meme" /></div>
      <h3>VIVA no mañana sino HOY!</h3>
      <div className="image_container"><img src="./assets/img/taco3.jpg" alt="Mexican meme" /></div>
      <h1 id="message">
        You still have
        <span id="hours" />
        <span id="mins" />
        <span id="secs" />
        {' '}
        until the Montezuma&apos;s Revenge
      </h1>
      <div className="image_container"><img src="./assets/img/taco2.gif" alt="Mexican meme" /></div>
      <h3>Finnish world championship sideshow!</h3>
    </div>
  );
}
export default App;
