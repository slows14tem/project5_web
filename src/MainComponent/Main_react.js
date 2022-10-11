import react from '../image/react.png';
import '../App.css'

function MainReact() {
  return (
    <div className="react">
        <div>
            <img src={react} alt="React"/>
        </div>
        <div className="content4">
            <h1>React</h1>
            <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
        </div>
    </div>
  );
}

export default MainReact;
