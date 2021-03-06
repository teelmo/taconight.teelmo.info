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

  }
  componentDidUpdate(prevProps, prevState, snapshot) {

  }
  componentWillUnMount() {

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
        <div className={style.image_container}><img src="img/taco4.gif" /></div>
        <h3>VIVA This Saturday!</h3>
        <div className={style.image_container}><img src="img/taco3.jpg" /></div>
        <h1>Vamos 18:29!</h1>
        <div className={style.image_container}><img src="img/taco2.gif" /></div>
      </div>
    );
  }
}
export default App;