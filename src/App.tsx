import React, {useEffect} from 'react';
import {useTelegram} from "./hooks";
import {Header} from "./ui/Header";

const App = () => {
    const { tg, onToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
        // eslint-disable-next-line
    }, []);

  return (
    <div className="App">
        <Header />
        <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
