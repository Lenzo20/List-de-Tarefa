import { model, Schema } from "mongoose";

const TaskList = model("TaskList",
  new Schema({
    description: {
      type: String,
      required: true,
    },
    status: {
      type: ["Concluido", "Não Concluido"],
      default: "Não Concluido",
    },
    createdAt: {
      type: Date,
      default: new Date,
    },
  })
);

export = TaskList;
