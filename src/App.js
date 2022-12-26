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
    pageTitle: "Завод твоя судьба",
    isShowed: false
  };

  changeTitleHandler = (nTitle) => {
    console.log("clicked");

    this.setState({
      pageTitle: nTitle
    });
  };

  toggleCarsHandler = () => {
    console.log("toggle");

    this.setState({
      isShowed: !this.state.isShowed
    });
  };

  render() {
    console.log("render");
    
    let cars = null;

    if(this.state.isShowed){
      cars = this.state.cars.map((car, index) => 
                <Car 
                    key={index}
                    title={car.title} 
                    description={car.description}
                    referens={car.referens}
                    onChangeTitle={this.changeTitleHandler.bind(this, car.title)} />
              )
    } 
      

    return (
      <>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>

        <div className='container'>
          { cars }
        </div>
      </>
    );
  }
}

export default App;
