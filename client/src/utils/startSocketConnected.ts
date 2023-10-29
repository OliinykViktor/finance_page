import socketIOClient from "socket.io-client";
import { newData, SocketParams } from "../type/type";

const ENDPOINT = "http://localhost:4000";

const startSocketConnected = (
  dispatch: SocketParams["dispatch"],
  setTickerData: SocketParams["setTickerData"],
  rejectWithValue: SocketParams["rejectWithValue"]
) => {
  const socket = socketIOClient(ENDPOINT);
  socket.emit("start");

  return new Promise<newData>((resolve) => {
    socket.on("ticker", (data: newData) => {
      dispatch(setTickerData(data));
      resolve(data);
    });
  }).catch((error) => rejectWithValue(error.message));
};

export default startSocketConnected;
