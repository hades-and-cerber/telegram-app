import React, {useEffect} from 'react';

const tg = window.Telegram.WebApp;

const App = () => {

    useEffect(() => {
        tg.ready();
    }, []);

    const handleClose = () => {
        tg.close();
    }

  return (
    <div className="App">
        hello
      <button onClick={handleClose}>Close</button>
    </div>
  );
}

export default App;
