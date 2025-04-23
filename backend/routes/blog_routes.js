import { Router } from "express"
import { blogCommentsController, getCommentsController } from "../controllers/blog_comments.controller.js"


const router = Router()

router.route("/comments").post(blogCommentsController)
router.route("/getComments").get(getCommentsController)
// export {blogRouter}
export default router