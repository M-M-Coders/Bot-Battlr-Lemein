import React from 'react';
import './BotArmy'

function BotArmy({ army, removeFromArmy, dischargeBot }) {
  return (
    <div>
      <div className="bot-list">
        {army && army.length > 0 ? (
          army.map((bot) => (
            <div key={bot.id}>
              <BotProfile bot={bot} />
              <button onClick={() => removeFromArmy(bot)}>Release</button>
              <button onClick={() => dischargeBot(bot)}>Discharge</button>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}

export default BotArmy;