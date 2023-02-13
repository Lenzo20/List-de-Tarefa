import { Request, Response } from "express";

import TaskList from "../model/TaskList";

export async function creatTask(req: Request, res: Response) {
  const { description } = req.body;

  const task = await TaskList.create({ description });

  return res.status(201).json(task);
}
