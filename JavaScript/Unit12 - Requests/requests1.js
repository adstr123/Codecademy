// requests I - making GET & POST requests with JS' XHR object, query strings
// using Datamuse API for GET, Rebrandly URL Shortener API for POST

// JS is the language of the web because of its asynchronous capabilities
// JS uses an event loop to handle async function calls
// 1.) function call made
// 2.) added to a stack
// 3.) functions that make requests that need to wait for servers to respond get sent to a separate queue
// 4.) once the stack has cleared, then the functions in the queue are executed
// one system of technologies enabling developers to use the event loop to decide when to call functions/handle async events is called Asynchronous JS & XML (AJAX)
console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');

// AJAX enables requests to be made after initial page load
// XMLHttpRequest (XHR) API can be used to make many kinds of requests (and supports forms of data besides XML)
const xhr = new XMLHttpRequest;						// creates XMLHttpRequest object (common practise to name this object 'xhr')
const url = "https://api-to-call.com/endpoint";		// saves a URL string to a const

xhr.responseType = "json";							// sets the xhr XMLHttpRequest object's 'responseType' property equal to JSON (JS Object Notation)
xhr.onreadystatechange = () => {					// sets xhr's 'onreadystatechange' event handler equal to an anonymous arrow function
  if (xhr.readyState === XMLHttpRequest.DONE) {		// checks to see if the request has finished
    return xhr.response;							// return the request's response
  }
};

xhr.open('GET', url);								// create a new request with type GET for the URL specified by the 'url' var
xhr.send();											// send the request

// another example to request data from the Datamuse API, using query parameters
// query strings allow us to include additional information to be sent with a request
// a query string is separated from the URL using ?
// parameters are key-value pairs joined by =
// additional parameters are separated with &

// Information to reach API
const url = "https://api.datamuse.com/words?";
const queryParams = "rel_rhy=";										// start of the parameter for the query string, narrowing the search to words that rhyme

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
	const wordQuery = inputField.value;								// stores the value of the entire URL & query string
  const endpoint = url + queryParams + wordQuery;
  
  const xhr = new XMLHttpRequest;
  xhr.responseType = "json";
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response)									// renderResponse() is a helper function, printed in the appendix of these notes
    }
  };
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault()
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  };
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions)

// POST example
const xhr = new XMLHttpRequest;
const url = "https://api-to-call.com/endpoint";
const data = JSON.stringify({id: '200'});			// converts a vlue to a JSON string to send data to a server in a POST request

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;							// returns the response from the POST request
  }
};

xhr.open('POST', url);								// creates a new POST request with destination defined by var 'url'
xhr.send(data);										// sends the POST request with payload defined by 'data' var

// another POST example to shorten a link using the Rebrandly API
// Information to reach API
const apiKey = '95c04120f9654c9f9a89a8c54e0c66b7';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderRawResponse(xhr.response);
    }
  }
  
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');	// this is required by the Rebrandly API
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);


// APPENDIX A - example2 helper functions

// Formats response to look presentable on webpage
const renderResponse = (res) => {
  // handles if res is falsey
  if(!res){
    console.log(res.status)
  }
  // in case res comes back as a blank array
  if(!res.length){
    responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>"
    return
  }

  // creating an array to contain the HTML strings
  let wordList = []
  // looping through the response and maxxing out at 10
  for(let i = 0; i < Math.min(res.length, 10); i++){
    // creating a list of words
    wordList.push(`<li>${res[i].word}</li>`)
  }
  // joins the array of HTML strings into one string
  wordList = wordList.join("")

  // manipulates responseField to render the modified response
  responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`
  return
}

// Renders response before it is modified
const renderRawResponse = (res) => {
  // taking the first 10 words from res
  let trimmedResponse = res.slice(0, 10)
  //manipulates responseField to render the unformatted response
  responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`
}

// Renders the JSON that was returned when the Promise from fetch resolves.
const renderJsonResponse = (res) => {
  // creating an empty object to store the JSON in key-value pairs
  let rawJson = {}
  for(let key in response){
    rawJson[key] = response[key]
  }
  // converting JSON into a string and adding line breaks to make it easier to read
  rawJson = JSON.stringify(rawJson).replace(/,/g, ", \n")
  // manipulates responseField to show the returned JSON.
  responseField.innerHTML = `<pre>${rawJson}</pre>`
}
