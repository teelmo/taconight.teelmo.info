import React, {Component} from 'react';
import style from './../styles/styles.less';

import Confetti from 'react-confetti';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  componentDidMount() {
    this.counter();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

  }
  counter() {
    // The data/time we want to countdown to
    var countDownDate = new Date('May 29, 2022 18:30:00').getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {
      var now = new Date().getTime();
      var timeleft = countDownDate - now;
          
      // Calculating the days, hours, minutes and seconds left
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
          
      // Result is output to the specific element
      document.getElementById('hours').innerHTML = hours + 'h ' 
      document.getElementById('mins').innerHTML = minutes + 'm ' 
      document.getElementById('secs').innerHTML = seconds + 's ' 
          
      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById('hours').innerHTML = '' 
        document.getElementById('mins').innerHTML = ''
        document.getElementById('secs').innerHTML = ''
        document.getElementById('message').innerHTML = 'YOU ARE LATE OR PRESENT!!';
      }
    }, 1000);
  }
  // shouldComponentUpdate(nextProps, nextState) {}
  // static getDerivedStateFromProps(props, state) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  // static getDerivedStateFromError(error) {}
  // componentDidCatch() {}
  render() {
    return (
      <div className={style.app}>
        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={true} className={style.rain} />
        <div className={style.image_container}><img src="img/mexican.gif" /></div>
        <h3>HOMBRES AND AMIGO&shy;RETTES!</h3>
        <h1>FISH TACO NIGHT</h1>
        <h3>Vamos!</h3>
        <div className={style.image_container}><img src="img/taco4.gif" /></div>
        <h3>VIVA no mañana sino HOY!</h3>
        <div className={style.image_container}><img src="img/taco3.jpg" /></div>
        <h1 id="message">You still have <span id="hours"></span><span id="mins"></span><span id="secs"></span> until the Montezuma's Revenge</h1>
        <div className={style.image_container}><img src="img/taco2.gif" /></div>
        <h3>Finnish world championship sideshow!</h3>
      </div>
    );
  }
}
export default App;