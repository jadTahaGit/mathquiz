import './App.css';

function App() {
  const mainTitle = "Math Quiz!";
  const secTitle = "Test Your Knowladge";
  const problem = `Charley is practising hard to qualify for the national gymnastis team. 

  She has a regular weekly routine, training for six hours a day on some days and four hours a day on the other days.
    
  She trains altogether 38 hours in a seven day week.
    
  Let the number of "6 hour" days be s, and the number of "4 hour" days be f.
    
  Write down two equations that can be used to find s and f.
  `;
  
  return (
    <div className="App">
      <h1>{mainTitle}</h1>
      <h3>{secTitle}</h3>
      <div className="container">
        <div className="problem">
          <p>
          {problem}
          </p>
        </div>
        <div className="choices ">
          <div className="choice">
            <div className="choice-letter">
              <p>
              <span><em>A) </em></span>
                1. s + f = 7 <br />
                2. 4s + 6f = 38</p>
            </div>
          </div>
          <div className="choice">
            <div className="choice-letter">
              <p>
              <span><em>A) </em></span>
                1. s + f = 7 <br />
                2. 4s + 6f = 38</p>
            </div>
          </div>
          <div className="choice">
            <div className="choice-letter">
              <p>
              <span><em>A) </em></span>
                1. s + f = 7 <br />
                2. 4s + 6f = 38</p>
            </div>
          </div>
          <div className="choice">
            <div className="choice-letter">
              <p>
              <span><em>A) </em></span>
                1. s + f = 7 <br />
                2. 4s + 6f = 38</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
