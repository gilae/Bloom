import React from 'react';
import './StockCard.css';


const StockCard = (stock,onClickStar, selected, focused=false) => {
    return (
      <div className={`stock-container ${focused ? 'focused' : ''}`}>
        <div className="stock-info">
          <h4>{stock.symbol}</h4>
          <p>{stock.name}</p>
        </div>
        <p>
          <i className={`star ${selected ? 'selected' : ''}`} onClick={() => onClickStar(stock)}></i>
        </p>
      </div>
    );
}

export default StockCard;
