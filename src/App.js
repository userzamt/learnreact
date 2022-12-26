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

  changeTitleHandler = (nTitle) => {
    console.log("clicked");

    this.setState({
      pageTitle: nTitle
    });
  };

  handleInput = (event) => {
    console.log("input", event.target.value);

    this.setState({
      pageTitle: event.target.value
    });
  };

  render() {

    console.log("render");
    const {cars, pageTitle} = this.state;

    return (
      <>
        <h1>{pageTitle}</h1>

        <input type="text" onChange={this.handleInput} />
        <button onClick={this.changeTitleHandler.bind(this, 'Change !!')}>Change title</button>

        <div className='container'>
          {cars.map((car, index) => 
            <Car 
                key={index}
                title={car.title} 
                description={car.description}
                referens={car.referens}
                onChangeTitle={this.changeTitleHandler.bind(this, car.title)} />
          )}
        </div>
      </>
    );
  }
}

export default App;
