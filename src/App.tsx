import React, {useEffect} from 'react';
import {useTelegram} from "./hooks";
import {Header} from "./ui/Header";
import {Form} from "./ui/Form";

const App = () => {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
        // eslint-disable-next-line
    }, []);

  return (
    <div className="App">
        <Header />
        <Form />
    </div>
  );
}

export default App;
