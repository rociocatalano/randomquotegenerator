import React, {useState} from 'react';
import data from './quotes.json'

const QuoteBox = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    const [quotes, setQuotes] = useState(getRandomInt(Object.keys(data.quotes).length));
    const cambiarNumero = () => {
        setQuotes(getRandomInt(Object.keys(data.quotes).length));
    }

    return(
        <div id="quote-box" className='container'>
 
        <div className='row'>
            <div className="col-sm-1">
                <button className='quote-buttons' onClick={() =>  navigator.clipboard.writeText(data.quotes[quotes]["Quote"])} id="copy-to-clipboard" data-bs-toggle="tooltip" data-bs-placement="top" title="Copy to clipboard" >
                    <svg className="svg-icon" viewBox="0 0 20 20">
                        <path fill="none" d="M15.475,6.692l-4.084-4.083C11.32,2.538,11.223,2.5,11.125,2.5h-6c-0.413,0-0.75,0.337-0.75,0.75v13.5c0,0.412,0.337,0.75,0.75,0.75h9.75c0.412,0,0.75-0.338,0.75-0.75V6.94C15.609,6.839,15.554,6.771,15.475,6.692 M11.5,3.779l2.843,2.846H11.5V3.779z M14.875,16.75h-9.75V3.25h5.625V7c0,0.206,0.168,0.375,0.375,0.375h3.75V16.75z"></path>
                    </svg>
                </button>
            </div>
            <div className="col-sm-1">
            <button className='quote-buttons' id="btn-tweet" data-bs-toggle="tooltip" data-bs-placement="top" title='Share on Twitter'>
            <a id="tweet-quote"  href="twitter.com/intent/tweet" target="_blank">
                <svg className="svg-icon" id="tweet-icon" viewBox="0 0 20 20">
				    <path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
			    </svg>
                </a>
            </button>
            </div>
            <div className="col-sm-7">

            </div>
            <div className="col-sm-3">
            <button id="new-quote" onClick={cambiarNumero} title='Get a new random quote' >New quote</button></div>
            </div>
            <p id="text">
                <svg className="svg-icon" id="icon-clip" viewBox="0 0 20 20">
					<path d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"></path>
				</svg>
                "{data.quotes[quotes]["Quote"]}"</p>
            <p id="author"> - {data.quotes[quotes]["Author"]} </p>
            <p id="book">Source: {data.quotes[quotes]["Book"]}</p>
        </div>
    )
}

export default QuoteBox;