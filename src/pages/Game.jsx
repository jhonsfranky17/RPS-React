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
  const [compMove, setCompMove] = useState("");
  const [playerMove, setPlayerMove] = useState("");
  const [result, setResult] = useState("");
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
        displayResult(playerMove, computerMove);
      } else if (computerMove === "paper") {
        setResult("You Lose");
        displayResult(playerMove, computerMove);
      } else if (computerMove === "scissors") {
        setResult("You Win");
        displayResult(playerMove, computerMove);
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        setResult("You Win");
        displayResult(playerMove, computerMove);
      } else if (computerMove === "paper") {
        setResult("Tie");
        displayResult(playerMove, computerMove);
      } else if (computerMove === "scissors") {
        setResult("You Lose");
        displayResult(playerMove, computerMove);
      }
    } else if (playerMove === "scissors") {
      if (computerMove === "rock") {
        setResult("You Lose");
        displayResult(playerMove, computerMove);
      } else if (computerMove === "paper") {
        setResult("You Win");
        displayResult(playerMove, computerMove);
      } else if (computerMove === "scissors") {
        setResult("Tie");
        displayResult(playerMove, computerMove);
      }
    }
  }

  // Display Result
  function displayResult(playerMove, computerMove) {
    switch (playerMove) {
      case "rock":
        setPlayerMove("✊");
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
        break;
      case "paper":
        setPlayerMove("🖐️");
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
        break;
      case "scissors":
        setPlayerMove("✌️");
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
        break;
      default:
        break;
    }
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
      <Row>
        {playerMove && compMove && (
          <div className={styles.choice}>
            <Emoji>{`You ${playerMove}`}</Emoji>
            <Emoji>{`${compMove} Computer`}</Emoji>
          </div>
        )}
      </Row>
      <Result>{result}</Result>
      <Row>
        <Score>Wins:</Score>
        <Score>Losses:</Score>
        <Score>Ties:</Score>
      </Row>
      <Button variant="contained">Reset Score</Button>
    </Page>
  );
};

export default Game;
