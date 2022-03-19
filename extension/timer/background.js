let color = "#3aa757";

let alarm_name = "timer";

function startCount(limit) {
  let count = 0;
  const id = setInterval(() => {
    count++;
    changeBadgeText(String(count));
    if (limit < count) clearInterval(id);
  }, 1000);
}
startCount(30);

function changeBadgeText(text) {
  chrome.action.setBadgeText({ text });
}

const startAlarm = () => {
  chrome.alarms.create(alarm_name, { periodInMinutes: 1 });
};
// startAlarm();

// let timeInMinutes = 0;
// chrome.alarms.onAlarm.addListener((alarm) => {
//   // chrome.action.setIcon({
//   //   path: getRandomIconPath(),
//   // });
//   console.log(alarm);
//   const { name, periodInMinutes, scheduledTime } = alarm;
//   timeInMinutes--;
//   changeBadgeText(String(timeInMinutesn));
// });

// const changeBadgeBackground = (color) => {
//   // validate input
//   // chrome.browserAction.setBadgeBackgroundColor({ color });
//   // chrome.browserAction.setBadgeBackgroundColor({ color });
// };
// // changeBadgeBackground(color);
// const changeBadgeText = (text) => {
//   // validate input
//   chrome.browserAction.setBadgeText({ text });
// };
// // changeBadgeText("Hello, World");

// // const startCount = (timer) => {
// //   let count = 0;
// //   const timerId = setInterval(() => {
// //     count++;
// //     changeBadgeText(String(timer - count));
// //     if (count > timer) clearInterval(timerId);
// //   }, 1000);
// // };

// // startCount(30);
