import { deleteTodo } from "~/server/database/todo";

export default defineEventHandler(async (event) => {
  const params = getRouterParam(event, "id");
  if (params === undefined) throw new Error("id is required");
  const id = parseInt(params);
  const res = await deleteTodo(id);

  return {
    message: "Deleted task",
    data: res
  }
});
