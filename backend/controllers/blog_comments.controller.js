

import { BlogComments } from "../models/blog_comments.model.js";
const blogCommentsController = async (req, res) => {
    const { comment, username, email, website } = req.body;

    if ( !username || !email ) {
        return res.status(400).json({
            success: false,
            message: "Username or email is missing"
        })
    }

    console.log("Received comment data:", req.body);

    const newComment = await BlogComments.create({ comment, username, email, website });

    if (!newComment) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }

    console.log("Blog comments controller hit successfully");

    return res.status(201).json({
        success: true,
        message: "Comment created successfully",
        comment: newComment
    })
}

const getCommentsController = async (req, res) => {
    try {
        const comments = await BlogComments.find().sort({ createdAt: -1 }); // newest first
        res.status(200).json({
          success: true,
          message: "Comments fetched successfully",
          comments
        });
      } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({
          success: false,
          message: "Failed to fetch comments"
        });
      }
 }

export {blogCommentsController,getCommentsController}