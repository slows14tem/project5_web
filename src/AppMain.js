import './App.css';
import html from './image/html.png';
import css from './image/css.png';
import js from './image/js.png';
import react from './image/react.png';

function AppMain() {
  return (
    <div className="App-main">
        <main>
        <section id="id1">
            <div>
                <img src={html} alt="HTML"/>
            </div>
            <div className="content1">
                <h1>HTLM</h1>
                <p>HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용</p>
            </div>
        </section>
        <section id="id2">
            <div>
                <img src={css} alt="CSS"/>
            </div>
            <div className="content2">
                <h1>CSS</h1>
                <p>Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어</p>
            </div>
        </section>
        <section id="id3">
            <div>
                <img src={js} alt="JavaScript"/>
            </div>
            <div className="content3">
                <h1>JavaScript</h1>
                <p>웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원</p>
            </div>
        </section>
        <section id="id4">
            <div>
                <img src={react} alt="React"/>
            </div>
            <div className="content4">
                <h1>React</h1>
                <p>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</p>
            </div>
        </section>
        </main>
    </div>
  );
}

export default AppMain;
