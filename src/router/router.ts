import { Router } from "express";

import { creatTask } from "../controllers/creatTask";
import { deletTask } from "../controllers/deletTask";
import { FindTask } from "../controllers/findTask";
import { uptadTask } from "../controllers/uptadeTask";

const router = Router();

router.get("/test", (req, res) => {
  return res.status(200).json({ msg: "Hello welcome is here of test" });
});

router.get("/findTodList", FindTask);

router.post("/findTodList", FindTask);

router.post("/creatTask", creatTask);

router.put("/uptadeTask/:id", uptadTask);

router.delete("/deletTask/:id", deletTask);

export = router;
