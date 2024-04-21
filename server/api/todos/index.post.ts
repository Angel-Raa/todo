import { createTodo } from "~/server/database/todo";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  const { title, completed } = body;
  const data = await createTodo(title, completed);
  console.log(data);
  return {
    message: "Task created successfully. ",
    data,
  };
});
