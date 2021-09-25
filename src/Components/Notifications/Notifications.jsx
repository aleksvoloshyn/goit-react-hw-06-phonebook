import { store } from 'react-notifications-component';
export const onSuccsessNotification = () => {
  store.addNotification({
    title: 'Congratulations!',
    message: 'Контакт успешно добавлен в справочник',
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};

export const onErrorNotification = () => {
  store.addNotification({
    title: 'Ошибочка...!',
    message: 'Такой контакт уже есть',
    type: 'danger', // 'default', 'success', 'info', 'warning'
    container: 'top-right', // where to position the notifications
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
    touchSlidingExit: {
      swipe: {
        duration: 400,
        timingFunction: 'ease-out',
        delay: 0,
      },
      fade: {
        duration: 400,
        timingFunction: 'ease-out',
        delay: 0,
      },
    },
  });
  //   alert('Такой контакт уже есть');
};

export const onDeleteNotification = () => {
  store.addNotification({
    title: 'Информация!',
    message: 'Констакт успешно удален',
    type: 'warning', // 'default', 'success', 'info', 'warning'
    container: 'top-right', // where to position the notifications
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
    touchSlidingExit: {
      swipe: {
        duration: 400,
        timingFunction: 'ease-out',
        delay: 0,
      },
      fade: {
        duration: 400,
        timingFunction: 'ease-out',
        delay: 0,
      },
    },
  });
};
