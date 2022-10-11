import css from '../image/css.png';

function MainCss() {
  return (
    <div className="css">
        <div>
            <img src={css} alt="CSS"/>
        </div>
        <div className="content2">
            <h1>CSS</h1>
            <p>Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어</p>
        </div>
    </div>
  );
}

export default MainCss;
