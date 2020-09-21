import React, {Component} from 'react';
import style from './../styles/styles.less';

import Typist from 'react-typist';

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
        <div className={style.image_container}><img src="img/mexican.gif" /></div>
        <h3>HOMBRES AND AMIGO&shy;RETTES!</h3>
        <h1>FISH TACO NIGHT</h1>
        <div className={style.image_container}><img src="img/taco1.gif" /></div>
        <h3>VIVA This Friday!</h3>
        <h1>Vamos 19:30!</h1>
        <div className={style.image_container}><img src="img/taco2.gif" /></div>
      </div>
    );
  }
}
export default App;