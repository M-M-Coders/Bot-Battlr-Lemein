import React, { useState } from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';

const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const addToArmy = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };
  const enlistBot = (bot) => {
    // Check if the bot is not already enlisted
    if (!enlistedBots.find((b) => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const releaseBot = (botId) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection enlistBot={enlistBot} />
      <BotArmy enlistedBots={enlistedBots} releaseBot={releaseBot} />
    </div>
  );
};

export default App;
