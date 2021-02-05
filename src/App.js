import logo from './logo.svg';
import './App.css';
import HeaderFunc from './components/HeaderFunc';
import HeaderClass from './components/HeaderClass';
import LayoutExercise from './components/LayoutExercise/LayoutExercise';
import DataBinding from './components/DataBinding/DataBinding';
import HandleEvent from './components/HandleEvent/HandleEvent';
import DemoState from './components/StateReact/DemoState';
import ChooseCar from './components/StateReact/ChooseCar';
import RenderWithMap from './components/RenderWithMap/RenderWithMap';
import RenderCardMovie from './components/RenderWithMap/RenderCardMovie';

function App() {
  return (
    <div className="App">
      {/* <HeaderFunc /> */}
      {/* <HeaderClass /> */}
      {/* <LayoutExercise /> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <DemoState /> */}
      {/* <ChooseCar /> */}
      {/* <RenderWithMap /> */}
      <RenderCardMovie />
    </div>
  );
}

export default App;
