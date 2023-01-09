import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';


export const ClikedContext = React.createContext(false);

class App extends Component {

  constructor(props) {
    console.log("constructor app");
    super(props);

    this.state = {
      cliked: false,
      cars: [
        {title: "ГАЗ", description: "Горьковский автомобильный завод", referens: "https://gazgroup.ru"},
        {title: "ПАЗ", description: "Павловский автобусный завод", referens: "http://paz-bus.ru"},
        {title: "ЗМЗ", description: "Заволжский моторный завод", referens: "http://www.zmz.ru"},
        // {title: 1111111, description: 0.1, referens: "http://www.zmz.ru"}
      ],
      pageTitle: "Завод твоя судьба",
      isShowed: false
    };

  }  

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

  onChangeName = (nName, index) => {
    console.log("change name", nName, index);

    const car = this.state.cars[index];
    const cars = [...this.state.cars];
    
    car.title = nName;
    cars[index] = car;

    this.setState({
      cars
    });
  };

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({
      cars
    });
  }

  // Жизненный цикл
  // componentWillMount() {
  //   console.log("will mount");
  // }

  componentDidMount() {
    console.log("did mount");
  }

  render() {
    console.log("render");
    
    let cars = null;

    if(this.state.isShowed){
      cars = this.state.cars.map((car, index) => 
                <ErrorBoundary key={index}>
                  <Car
                      index={index}                       
                      title={car.title} 
                      description={car.description}
                      referens={car.referens}
                      onChangeName={ event => this.onChangeName(event.target.value, index)}
                      onDelete={this.deleteHandler.bind(this, index)} />
                </ErrorBoundary>
              )
    } 
      

    return (
      <>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        <ClikedContext.Provider value={this.state.cliked}>
          <Counter />       
        </ClikedContext.Provider>

        <div className='separator'></div>

        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        <button onClick={() => this.setState({cliked: true})}>Change cliked</button>

        <div className='container'>
          { cars }
        </div>
      </>
    );
  }
}

export default App;
