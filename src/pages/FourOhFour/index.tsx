import { Link } from "react-router-dom";
import confusedRobot from "../../assets/confused_robot.png";

const FourOhFour = () => {
  return (
    <main>
      <img src={confusedRobot} alt="A confused robot" />
      <p>What happened? 🤨</p>
      <p>How are we here? 🤔</p>
      <p>How embarrassing... 🙃</p>
      <p>
        Let's get you back. 🤪
      </p>
      <Link to="/flash-cards"><span>home</span></Link>
    </main>
  );
};

export default FourOhFour;
