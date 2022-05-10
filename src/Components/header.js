import logo from "../pictures/wnba.png";
const Header = () => {
  return (
    <div className="header-container">
      <h2 className="ui icon centered header" id="headerTop">
        <img src={logo} id="headerLogo"></img>
        <div className="content">Memory Game</div>
      </h2>
    </div>
  );
};

export default Header;

/*return (
  <div className='header-container'>
      <div className="header-container-left">
          <img alt="Pokemon memory game logo" src={logo} height="50px"/>
      </div>
      <div className="header-container-right">
          <p className="score">Score: {props.score}</p>
          <p className="score">High Score: {props.highScore}</p>
      </div>
  </div>
);
} */

