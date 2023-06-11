import React, { useState } from "react";
import './page.css';
function LotteryView() {
  const [lotteryResult, setLotteryResult] = useState(null);

  const registerTree = () => {
    // Logic to register a tree
    console.log("Tree registered");
  };

  const triggerLottery = () => {
    // Logic to trigger the lottery
    const randomNumber = Math.random(); // generates a random number between 0 and 1
    if (randomNumber > 0.5) {
      setLotteryResult("won");
    } else {
      setLotteryResult("lost");
    }
  };

  const redeemPrize = () => {
    // Logic to redeem the prize
    console.log("Prize redeemed");
  };

  return (
    <div>
      <button className="lottery-button" onClick={registerTree}>Register a Tree</button>
      <span className="button-gap" />
      <button className="lottery-button" onClick={triggerLottery}>Trigger the Lottery</button>
      {lotteryResult === "won" && (
        <div>
          <h2>YOU WON !</h2>
          <button className="lottery-button" onClick={redeemPrize}>Redeem</button>
        </div>
      )}
      {lotteryResult === "lost" && (
        <div>
          <h2>SORRY,YOU DIDN'T WIN THIS TIME</h2>
          <p>Try growing your tree to improve your chances and try again next week</p>
        </div>
      )}
    </div>
  );
}

export default LotteryView;
