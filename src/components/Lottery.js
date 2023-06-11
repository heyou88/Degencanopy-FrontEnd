import React, { useState } from "react";

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
      <h1>Lottery View</h1>
      <button onClick={registerTree}>Register a Tree</button>
      <button onClick={triggerLottery}>Trigger the Lottery</button>
      {lotteryResult === "won" && (
        <div>
          <h2>YOU WON</h2>
          <button onClick={redeemPrize}>Redeem</button>
        </div>
      )}
      {lotteryResult === "lost" && (
        <div>
          <h2>YOU DIDN'T WIN THIS TIME</h2>
          <p>Try growing your tree to improve your chances and try again next week</p>
        </div>
      )}
    </div>
  );
}

export default LotteryView;
