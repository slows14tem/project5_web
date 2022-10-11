import './App.css';
import MainSection from './MainComponent/Main_section';


function AppMain() {
  return (
    <div className="App-main">
      <main>
        <MainSection h1="HTML" />
        <MainSection h1="CSS" />
        <MainSection h1="JavaScript" />
        <MainSection h1="React" />
      </main>
    </div>
  );
}

export default AppMain;
