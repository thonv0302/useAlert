import { computed, ref } from 'vue';
import { notify } from '@kyvg/vue3-notification';

export function useAlerts() {
  const DEFAULT_DURATION = 50000; // 5 seconds
  const GROUP_APP = 'app';
  const TYPE_NOTIFICATION_ERROR = 'notification--error';
  const TYPE_NOTIFICATION_SUCCESS = 'notification--success';
  const TYPE_NOTIFICATION_WARNING = 'notification--warning';

  function notifyError(errorMsg, dur, title) {
    notify({
      group: GROUP_APP,
      type: TYPE_NOTIFICATION_ERROR,
      text: errorMsg,
      duration: dur || DEFAULT_DURATION,
      title,
    });
  }

  function notifySuccess(successMsg, dur) {
    notify({
      group: GROUP_APP,
      type: TYPE_NOTIFICATION_SUCCESS,
      text: successMsg,
      duration: dur || DEFAULT_DURATION,
    });
  }

  function notifyWarning(warningMsg, dur) {
    notify({
      group: GROUP_APP,
      type: TYPE_NOTIFICATION_WARNING,
      text: warningMsg,
      duration: dur || DEFAULT_DURATION,
    });
  }

  return {
    notifyError,
    notifySuccess,
    notifyWarning,
  };
}
