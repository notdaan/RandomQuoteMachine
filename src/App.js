import "./App.css"
import React from "react";
import quotes from "./quotes"
import colours from "./colours"
import QuoteAndAuth from "./quoteandAuth";

export default class App extends React.Component {

  state = {
    quote: quotes[0].quote,
    author: quotes[0].author,
  }

  getQuote = () => {
    let randQuoteNum = Math.floor(Math.random() * quotes.length);
    let randColourNum = Math.floor(Math.random() * colours.length);
    console.log(randColourNum)
    console.log(randQuoteNum)
    let randQuote = quotes[randQuoteNum];
    let randColour = colours[randColourNum];
    console.log(randColour)

    this.setState({
      author: randQuote.author,
      quote: randQuote.quote,
      bgcolor: randColour
  })
};
  render() {
  return (
    <div className="quote-wrapper">
      <QuoteAndAuth 
        getQuote={this.getQuote}
        quote={this.state}
        />
    </div>
  );
};
}
          