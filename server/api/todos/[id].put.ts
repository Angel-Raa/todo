import { updateTodo } from "~/server/database/todo";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const param = getRouterParam(event, "id");
  const { title, completed } = body;
  if (!title || !completed) throw new Error("Invalid body");
  if (param === undefined) throw new Error("Invalid param");
  const id = parseInt(param);
  const data = await updateTodo(id, title, completed);

  return {
    message: "updated task",
    data,
  };
});
