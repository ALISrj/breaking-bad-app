/**
 * @returns {Object} quote information
 */
const fetchQuote = async() => {

    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();

    return data[0];
}

/**
 *
 * @param {HTMLDivElement} element
 * @constructor
 */
export const BreakingbadApp = async(element) => {

    document.querySelector('#app-tittle').innerHTML = "Breaking Bad App";
    element.innerHTML = 'Loading...';

   // await fetchQuote();

    const quoteLabel = document.createElement("blockquote");
    const authorLabel = document.createElement("h3");
    const nextQuoteButton = document.createElement("button");
    nextQuoteButton.innerText = "Next Quote";
    element.replaceChildren(nextQuoteButton);

    const renderQuote = ( data ) => {

        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }

    nextQuoteButton.addEventListener("click", async() => {

        element.innerHTML = 'Loading...';
        const data = await fetchQuote();
        renderQuote(data);

    });

    fetchQuote()
        .then( renderQuote );




}