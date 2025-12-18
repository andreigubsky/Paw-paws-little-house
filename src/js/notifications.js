import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function notificationError(message) {
  iziToast.show({
    message: message,
    position: 'topRight',
    backgroundColor: 'rgb(255, 215, 163)',
  });
}

export function notificationSuccess(message) {
  iziToast.show({
    message: message,
    position: 'topRight',
    backgroundColor: 'rgba(164, 255, 163, 1)',
  });
}
