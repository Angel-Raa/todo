import { getAllTodo } from "~/server/database/todo";

export default defineEventHandler(async (event) => {
  const data = await getAllTodo();
  const url = getRequestURL(event);
  return {
    message: "success",
    url,
    date: new Date(),
    data,
  };
});
