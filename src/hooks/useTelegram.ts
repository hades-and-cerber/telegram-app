const tg = window.Telegram.WebApp;

const useTelegram = () => {

  const onClose = () => {
    tg.close();
  };

  return {
    tg,
    onClose,
    user: tg.initDataUnsafe?.user,
  };
};

export default useTelegram;
