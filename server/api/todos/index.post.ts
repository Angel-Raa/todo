import { createTodo } from "~/server/database/todo";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { title, completed } = body;
  if (!title || !completed) {
    return {
      message: "Please provide title and completed",
    };
  }
  const data = await createTodo(title, completed);
  return {
    message: "Task created successfully. ",
    data,
  };
});
