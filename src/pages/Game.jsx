import { useState } from "react";
import Row from "../components/Row";
import Button from "../components/Button";
import Header from "../components/Header";
import Page from "../components/Page";
import styles from "./Game.module.css";
import Score from "../components/Score";
import Result from "../components/Result";
import Emoji from "../components/Emoji";

const Game = () => {
  // useState
  const [compMove, setCompMove] = useState("");
  const [playerMove, setPlayerMove] = useState("");
  const [result, setResult] = useState("");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);
  // Array for picking random move
  const moves = ["rock", "paper", "scissors"];
  let computerMove;

  // Computer Move
  function selectComputerMove() {
    computerMove = moves[Math.floor(Math.random() * 3)];
    return computerMove;
  }

  //   Player Move
  function playGame(playerMove) {
    computerMove = selectComputerMove();
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        setResult("Tie");
        setTies(ties + 1);
        displayResult(playerMove, computerMove);
      } else if (computerMove === "paper") {
        setResult("You Lose");
        setLosses(losses + 1);
        displayResult(playerMove, computerMove);
      } else if (computerMove === "scissors") {
        setResult("You Win");
        setWins(wins + 1);
        displayResult(playerMove, computerMove);
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        setResult("You Win");
        setWins(wins + 1);
        displayResult(playerMove, computerMove);
      } else if (computerMove === "paper") {
        setResult("Tie");
        setTies(ties + 1);
        displayResult(playerMove, computerMove);
      } else if (computerMove === "scissors") {
        setResult("You Lose");
        setLosses(losses + 1);
        displayResult(playerMove, computerMove);
      }
    } else if (playerMove === "scissors") {
      if (computerMove === "rock") {
        setResult("You Lose");
        setLosses(losses + 1);
        displayResult(playerMove, computerMove);
      } else if (computerMove === "paper") {
        setResult("You Win");
        setWins(wins + 1);
        displayResult(playerMove, computerMove);
      } else if (computerMove === "scissors") {
        setResult("Tie");
        setTies(ties + 1);
        displayResult(playerMove, computerMove);
      }
    }
  }

  // Display Result
  function displayResult(playerMove, computerMove) {
    switch (playerMove) {
      case "rock":
        setPlayerMove("✊");
        break;
      case "paper":
        setPlayerMove("🖐️");
        break;
      case "scissors":
        setPlayerMove("✌️");
        break;
      default:
        break;
    }
    switch (computerMove) {
      case "rock":
        setCompMove("✊");
        break;
      case "paper":
        setCompMove("🖐️");
        break;
      case "scissors":
        setCompMove("✌️");
        break;
      default:
        break;
    }
  }

  //  Reset Score
  function resetScore() {
    setWins(0);
    setLosses(0);
    setTies(0);
  }

  return (
    <Page direction="column">
      <Header>Rock Paper Scissors</Header>
      <Row>
        <Button variant="outlined" onClick={() => playGame("rock")}>
          ✊
        </Button>
        <Button variant="outlined" onClick={() => playGame("paper")}>
          🖐️
        </Button>
        <Button variant="outlined" onClick={() => playGame("scissors")}>
          ✌️
        </Button>
      </Row>
      {/* Conditional Rendering */}
      {playerMove && compMove ? (
        wins || losses || ties ? (
          <div className={styles.wrapper}>
            <div className={styles.choice}>
              <Emoji>{`You ${playerMove}`}</Emoji>
              <Emoji>{`${compMove} Computer`}</Emoji>
            </div>
            <Result>{result}</Result>
          </div>
        ) : null
      ) : null}
      <Row>
        <Score>Wins: {wins}</Score>
        <Score>Losses: {losses}</Score>
        <Score>Ties: {ties}</Score>
      </Row>

      <Button variant="contained" onClick={resetScore}>
        Reset Score
      </Button>
    </Page>
  );
};

export default Game;
