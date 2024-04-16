import "../../styles/Stack.css";
import Javascript from "../../assets/img/langIcon/js.svg"
import ReactJs from "../../assets/img/langIcon/react.svg"
import Css from "../../assets/img/langIcon/css.svg"
import NodeJs from "../../assets/img/langIcon/node-js.svg"
import Express from "../../assets/img/langIcon/express.svg"
import Sql from "../../assets/img/langIcon/sql.svg"
const Stack = () => {
  return (
    <div className="Stack">
      <div className="title">
        <h1>Stack</h1>
        <p>Les languages qui animent mon code</p>
      </div>
      <div className="container">
        <div className="planets sun">
            <img src={Javascript} alt="Javascript" />
          <div className="one ring"></div>

          <div className="two">
          <img src={ReactJs} alt="ReactJs" />
            <div className="ring"></div>
            <div className="seven">
          <img src={Css} alt="Css" />
            </div>
          </div>

          <div className="three">
            <div className="ring"></div>
            <div className="four">
          <img src={Sql} alt="Sql" />
            </div>
          </div>
          <div className="three fast">
          <img src={NodeJs} alt="NodeJs" />
            <div className="ring"></div>
            <div className="six">
          <img src={Express} alt="Express" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stack;
