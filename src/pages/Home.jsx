import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home-page">
      <div className="home-card">
        <h1>React Quiz App</h1>

        <p>
          Test your knowledge of web development and React.
          Answer the questions and see your final score!
        </p>

        <button onClick={() => navigate("/quiz")}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;