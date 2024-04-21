import { getAllTodo } from "~/server/database/todo";

export default defineEventHandler(async (event) => {
  const data = await getAllTodo();
  return {
    message: "success",
    url: event.node.req.url,
    date: new Date(),
    data,
  };
});
