import { Router } from "express";
import Post from '../models/Post.js'


const router = Router();

router.post("/add", async (req, res) => {
  try {
    const { text, title, imgUrl } = req.body;
    const post = await new Post({
          title, text, imgUrl
      })
      await post.save()
      res.json(post)
  } catch (e) {
    console.log(e);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (e) {
    console.log(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const post = await Post.findById(id)
    res.json(post)
  } catch (e) {
    console.log(e);
  }
});

router.post("/delete", async (req, res) => {
  try {
    const {id} = req.body;
    await Post.findByIdAndDelete(id)
    res.json({message: 'Success delete'})
  } catch (e) {
    console.log(e);
  }
});

export default router;
