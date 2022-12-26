import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';


class App extends Component {

  state = {
    cars: [
      {title: "ГАЗ", description: "Горьковский автомобильный завод", referens: "https://gazgroup.ru"},
      {title: "ПАЗ", description: "Павловский автобусный завод", referens: "http://paz-bus.ru"},
      {title: "ЗМЗ", description: "Заволжский моторный завод", referens: "http://www.zmz.ru"}
    ],
    pageTitle: "Завод твоя судьба"
  };

  changeTitleHandler = (props) => {
    console.log("clicked");

    const {pageTitle: oldTitle} = this.state;
    let nTitle = oldTitle + (new Date()).getTime();

    this.setState({
      pageTitle: nTitle
    });
  };

  render() {

    console.log("render");
    const {cars, pageTitle} = this.state;

    return (
      <>
        <h1>{pageTitle}</h1>

        <button onClick={this.changeTitleHandler}>Change title</button>

        <div className='container'>        
          <Car title={cars[0].title} description={cars[0].description} referens={cars[0].referens} />
          <Car title={cars[1].title} description={cars[1].description} referens={cars[1].referens} />
          <Car title={cars[2].title} description={cars[2].description} referens={cars[2].referens} />        
        </div>
      </>
    );
  }
}

export default App;
