import { Request, Response } from "express";

import TaskList from "../model/TaskList";

export async function FindTask(req: Request, res: Response) {
  const { status } = req.body;

  if (!status) {
    const task = await TaskList.find();

    return res.status(200).json(task);
  }

  if (status === "Tudo") {
    const task = await TaskList.find();

    return res.status(200).json(task);
  }

  if (status === "Concluido" || status === "concluido") {
    const task = await TaskList.find({ status });

    return res.status(200).json(task);
  }

  if (status === "Não Concluido" || status === "Nao conluido" || status === "nao conluido") {
    const task = await TaskList.find();

    return res.status(200).json(task);
  }
}
