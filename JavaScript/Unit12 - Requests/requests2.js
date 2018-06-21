// requests II - promises: fetch(), async, await

// promise is an object that handles async data, with 3 states:
// 1.) pending: when promise is created or waiting for data
// 2.) fulfilled: async operation was handled successfully
// 3.) rejected: async operation was unsuccessful
// once promises are fulfilled/rejected, you can chain additional method to the original promise

// fetch() GET example
// 1.) creates request obj containing relevant info for API
// 2.) sends req obj to API endpoint
// 3.) returns promise that ultimately resolves to response obj, containing status of the promise with info from API sent back
fetch("https://api-to-call.com/endpoint").then((response) => {			// begin fetching resources asynchronously, and chain a then() method (fires only after promise status of fetch() is resolved) with a success callback as its first param
  if (response.ok) {													// if there were no errors, return the response JSON
    return response.json();
  } throw new Error('Request failed!');									// throw an error if response.ok is falsy
},
                                               (networkError) => {		// second arg is also arrow function to handle failures
  console.log(networkError.message);									// if there is a failure, print the error message
}).then((jsonResponse) => {												// chain a second then()
  return jsonResponse;													// returns the JSON response only after previous then() is finished without error
})

// fetch() GET example to retrieve words that sound like an input word from the Datamuse API
// Information to reach API
const url = "https://api.datamuse.com/words";
const queryParams = "?sl=";										// directs the API to find words that sound like the provided word

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  
  fetch(endpoint).then(response => {
    if (response.ok) {
      return response.json();									// using this line, the next then() function gets the response
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  }).then((jsonResponse) => {
    renderResponse(jsonResponse);
  });
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

// fetch() POST example
fetch("https://api-to-call.com/endpoint", {	// second arg is object declaring POST as the request type and declaring data payload
  method: 'POST',
  body: JSON.stringify({id: '200'})
}).then((response) => {
  if (response.ok) {
    return response.json();					// this line passes the JSON response to the next chained then()
  } throw new Error('Request failed!');
}, (networkError) => {
  console.log(networkError.message);
}).then((jsonResponse) => {					// this line shows the JSON response
  jsonResponse
});

// fetch() POST example to retrieve words that sound like an input word from the Datamuse API
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
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  }).then((response) => {
    if (response.ok){
      return response.json();
    } throw new Error('Request failed!');
  }, (networkError) => {
    console.log(networkError.message);
  }).then((jsonResponse) => {
    renderResponse(jsonResponse);
  });
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// async GET requests with 'async' and 'await' keywords
// async function contains await expression
// this pauses execution and waits for passed Promise's resolution
// then resumes execution and returns resolved value
// (continue moving through the message queue while a promise resolves)
const getData = async () => {
  try {
    const response = await fetch("https://api-to-call.com/endpoint");
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
};

// async GET example to retrieve nouns that describe the input word from the Datamuse API
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jja=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error) {
    console.log(error);
}
};

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// async POST requests
const getData = async () => {
  try {
    const response = await fetch("https://api-to-call.com/endpoint", {
      method: 'POST',
      body: JSON.stringify({id: 200})
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
};

// async POST example to shorten URLs using the Rebrandly API
// information to reach API
const apiKey = '95c04120f9654c9f9a89a8c54e0c66b7';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = async () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
        'apikey': apiKey
      }
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch(error) {
    console.log(error);
  }
};

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
