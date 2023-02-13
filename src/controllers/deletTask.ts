import { Request, Response } from "express";

import TaskList from "../model/TaskList";

export async function deletTask(req: Request, res: Response) {
  const id = req.params.id;

  if (!id)
    return res.status(404).json({ msg: "Id is not found" });

  const task = await TaskList.findById(id);

  if (!task)
    return res.status(404).json({ msg: "Task not found" });

  task.delete();

  return res.status(200).json({ msg: "Task deleted" });
}
