import './App.css';
import NavBar from './elements/NavBar/NavBar';
import Header from './elements/Header/Header';
import icon1 from "./images/icon1.png"
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"
import Icons from './elements/Icons/Icons';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header 
      title="Say hello to ReactJS" 
      paragraph={`You will learn how to use the most popular frontend library and become a super ninja developer.`} 
      buttonText='Awesome!'/>
      <div className='iconsPlace'>
      <Icons img={icon1} title="Declarative" text="React makes it painless to create interactive UIs."/>
      <Icons img={icon2} title="Components" text="Build encapsulated components that manage their state."/>
      <Icons img={icon3} title="Single-Way" text="A set of immutable values are passed to the component's"/>
      <Icons img={icon4} title="JSX" text="Statically-typed designed to run on modern browsers."/>


      </div>

      

    </div>
  );
}

export default App;
