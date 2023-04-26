const endpoint = "https://api.quotable.io/random";

// Get DOM elements
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");

// Get a new quote from the API
function getQuote() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      // Update the quote and author text to display the new quote
      quote.textContent = data.content;
      author.textContent = `- ${data.author}`;
    })
    .catch((error) => console.log(error));
}

// Event listener for the new quote button
newQuoteBtn.addEventListener("click", getQuote);

// Event listener for the copy quote button
copyQuoteBtn.addEventListener("click", () => {
  // Concatenate the quote and author text into a single string
  const quoteToCopy = `${quote.textContent} ${author.textContent}`;

  // Write the quote to the user's clipboard
  navigator.clipboard.writeText(quoteToCopy);

  // Display an alert to let the user know the quote has been copied
  alert("Quote copied to clipboard!");
});

// Get an initial quote when the page loads
getQuote();