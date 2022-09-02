const subscriptions: { [x: string]: any } = {};
const getNextUniqueId = getIdGenerator();

function subscribe(eventType: string, callback: any) {
  const id = getNextUniqueId();

  if (!subscriptions[eventType]) subscriptions[eventType] = {};

  subscriptions[eventType][id] = callback;

  return {
    unsubscribe: () => {
      delete subscriptions[eventType][id];
      if (Object.keys(subscriptions[eventType]).length === 0) delete subscriptions[eventType];
    },
  };
}

function unsubscribe(eventType: string) {
  delete subscriptions[eventType];
}

function publish(eventType: string, arg: any) {
  if (!subscriptions[eventType]) return;

  Object.keys(subscriptions[eventType]).forEach((key) => subscriptions[eventType][key](arg));
}

function getIdGenerator() {
  let lastId = 0;

  return function getNextUniqueId() {
    lastId += 1;
    return lastId;
  };
}

export default { publish, subscribe, unsubscribe };