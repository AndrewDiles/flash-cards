import { Link } from "react-router-dom";

const NAV_OPTIONS = ["exercises", "settings"];

const Home = () => {
  return (
    <main>
      <h1>Flash Cards</h1>
      {NAV_OPTIONS.map((option) => {
        return (
          <Link to={`/flash-cards/${option}`} key={option}>
            <span>{option}</span>
          </Link>
        );
      })}
    </main>
  );
};

export default Home;
