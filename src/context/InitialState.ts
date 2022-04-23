import dayjs from "dayjs";

const timeStamp1 = new Date().setMinutes(0) + 2 * 60 * 60 * 1000;
const timeStamp2 = new Date().setMinutes(0) + 4 * 60 * 60 * 1000;

const INITIAL_STATE = [
  { id: 1, time: timeStamp1, task: "Kitap oku" },
  { id: 2, time: timeStamp2, task: "Kedileri besle" },
];

export default INITIAL_STATE;
