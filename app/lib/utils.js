import mongoose from "mongoose";

export const connectTodb = async () => {
  const connection = {};
  

  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    throw new Error(err);
  }
};

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
