import React from "react";


export default function QuoteAndAuth(props) {

    const {quote, getQuote} = props;
    return (
        <div className="App">
        <div id="quote-box" style={{backgroundColor: quote.bgcolor}}>
        <div className="quote-container">
        <h1 id="text" style={{color: quote.bgcolor}}><i className="fa fa-quote-left"></i> {quote.quote} <i className="fa fa-quote-right"> </i></h1>
        <h3 id="author" style={{color: quote.bgcolor}}>{quote.author}</h3>
          <div className="buttons">
            <button 
            style={{color: quote.bgcolor}}
            type="submit"
            id="tweet-quote"
            onClick={() => {
              window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent('"'+ quote.quote + '" '  + quote.author))
            }}>
            <i className="fa fa-twitter"></i></button>
            <button
                style={{color: quote.bgcolor}}
                type="submit" 
                id="new-quote" 
                onClick={() => {getQuote()}}>New Quote</button>
          </div>
        </div>
      </div>
    </div>
    )
}