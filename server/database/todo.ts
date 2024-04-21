import { Prisma } from "@prisma/client";
import { prisma } from "./prisma";

export const createTodo = async (title: string, completed: boolean) => {
  return await prisma.todo.create({
    data: {
      title,
      completed,
    },
  });
};

export const getTodoById = async (id: number) => {
  return await prisma.todo.findUnique({ where: { id } });
};
export const getAllTodo = async () => {
  return await prisma.todo.findMany();
};

export const deleteTodo = async (id: number) => {
  return await prisma.todo.delete({
    where: {
      id,
    },
  });
};

export const updateTodo = async (
  id: number,
  title: string,
  completed: boolean
) => {
  return await prisma.todo.update({
    where: { id },
    data: {
      title,
      completed,
    },
  });
};
