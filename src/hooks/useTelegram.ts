const mockTG = {
  initDataUnsafe: {
    query_id: 'AAG8DTkWAAAAALwNORZT02ZZ',
    user: {
      id: 372837820,
      first_name: 'name',
      last_name: '',
      username: 'hades3110',
      language_code: 'en',
      allows_write_to_pm: true
    },
  },
};

const tg = window.Telegram.WebApp;

const useTelegram = () => {

  const onClose = () => {
    tg.close();
  };

  return {
    tg,
    onClose,
    user: tg.initDataUnsafe?.user || mockTG.initDataUnsafe.user,
  };
};

export default useTelegram;
