import './App.css';

function AppTop() {
  return (
    <div className="App-top">
      <nav>
        <div className="nav_logo">
          <p>mylogo</p>
        </div>
        <ul className="nav_menu">
          <li><a href="#id1">HTML</a></li>
          <li><a href="#id2">CSS</a></li>
          <li><a href="#id3">JavaScript</a></li>
          <li><a href="#id4">React</a></li>
        </ul>
        <ul className="nav_icon">
          <li><i className="fa-brands fa-facebook"></i></li>
          <li><i className="fa-brands fa-square-instagram"></i></li>
        </ul>
      </nav>
    </div>
  );
}

export default AppTop;
