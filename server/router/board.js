import express from "express";
import "express-async-errors";

const boards = [
  {
    id: "0",
    text: "Test ",
    name: "hyun",
  },
  {
    id: "1",
    text: "Test2 ",
    name: "hyun2",
  },
  {
    id: "2",
    text: "Test3 ",
    name: "hyun3",
  },
];

const router = express.Router();

// 게시글 조회

// GET /boards & /boards?name=:name
router.get("/", (req, res, next) => {
  const name = req.query.name;
  const data = name ? boards.filter((board) => board.name === name) : boards;
  res.status(200).json(data);
});

// /boards/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const board = boards.filter((board) => board.id === id);
  if (board) {
    res.status(200).json(board);
  } else {
    res
      .status(404)
      .josn({ message: `id가 ${id}인 게시글을 찾지 못 하였습니다. ` });
  }
});

export default router;