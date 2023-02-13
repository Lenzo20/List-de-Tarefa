import { Request, Response } from "express";

import TaskList from "../model/TaskList";

export async function uptadTask(req: Request, res: Response) {
  const { description, status } = req.body;
  const id = req.params.id;

  const task = await TaskList.findById(id);

  if (!task)
    return res.status(404).json({ msg: "Task not found" });


  if (!description)
    return res.status(404).json({ msg: "Description not found" });


  if (!status)
    return res.status(404).json({ msg: "Status not found" });


  if (description)
    task.description = description;

  if (status != "Concluido")
    return res.status(400).json({ msg: "Status invalid" });

  if (status)
    task.status = status;

  task.save();

  return res.status(201).json(task);
}
