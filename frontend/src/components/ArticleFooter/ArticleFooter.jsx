import React, { useState, useEffect } from "react";
import fb_icon from "../../assets/fb_icon.svg";
import tweet_icon from "../../assets/tweet_icon.svg";
import ln_icon from "../../assets/linkedin_icon.svg";
import pin_icon from "../../assets/pinterest_icon.svg";
import whapp_icon from "../../assets/whatsapp_icon.svg";
import tel_icon from "../../assets/telegram_icon.svg";
import admin_icon from '../../assets/admin_user_icon.png';
import Footer from "../Footer/Footer";
import axios from "axios";

import "./ArticleFooter.css";

function ArticleFooter() {
  const [commentData, setCommentData] = useState({
    username: "",
    email: "",
    website: "",
    comment: "",
  });

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch comments when component mounts if you want them to load automatically
  // useEffect(() => {
  //   fetchComments();
  // }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get("https://paaltu-production-2.onrender.com/api/v1/blog/getComments");
      setComments(res.data.comments);
      return res.data.comments;
    } catch (err) {
      console.error("Error fetching comments:", err);
      return [];
    }
  };

  const handleFetchComments = async () => {
    if (!showComments) {
      const fetchedComments = await fetchComments();
      setComments(fetchedComments);
      setShowComments(true);
    } else {
      setShowComments(false);
    }
  };

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!commentData.username || !commentData.email || !commentData.comment) {
      setResponseMsg("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(commentData.email)) {
      setResponseMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const res = await axios.post("https://paaltu-production-2.onrender.com/api/v1/blog/comments", commentData);
      setResponseMsg("Comment posted successfully!");
      setCommentData({ username: "", email: "", website: "", comment: "" }); // Clear fields
      
      // Refresh comments if they're already being shown
      if (showComments) {
        const fetchedComments = await fetchComments();
        setComments(fetchedComments);
      }
    } catch (err) {
      console.error(err);
      setResponseMsg("Failed to post comment. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <div className="article-main">
        <div className="article-heading">Like this article?</div>
        <div className="article-social-media">
          <div className="article-social-media-row">
            <div className="article-icon article-facebook">
              <img src={fb_icon} alt="Facebook" />
              <p>Share on Facebook</p>
            </div>
            <div className="article-icon article-twitter">
              <img src={tweet_icon} alt="Twitter" />
              <p>Share on Twitter</p>
            </div>
            <div className="article-icon article-linkedin">
              <img src={ln_icon} alt="LinkedIn" />
              <p>Share on LinkedIn</p>
            </div>
          </div>
          <div className="article-social-media-row">
            <div className="article-icon article-pinterest">
              <img src={pin_icon} alt="Pinterest" />
              <p>Share on Pinterest</p>
            </div>
            <div className="article-icon article-whatsapp">
              <img src={whapp_icon} alt="WhatsApp" />
              <p>Share on WhatsApp</p>
            </div>
            <div className="article-icon article-telegram">
              <img src={tel_icon} alt="Telegram" />
              <p>Share on Telegram</p>
            </div>
          </div>
        </div>
        <div className="article-divider-admin">
          <div className="article-divider"></div>
          <div className="article-admin">
            <img src={admin_icon} alt="Admin" />
            <p>Admin</p>
          </div>
          <div className="article-divider"></div>
        </div>
        <div className="article-comment">
          <p className="comment-para1">Leave a Comment</p>
          <p className="comment-para2">Your email address will not be published. Required fields are marked *</p>
          <textarea
            placeholder="Type here.."
            name="comment"
            value={commentData.comment}
            onChange={handleChange}
            className="comment-textarea"
            required
          ></textarea>
        </div>
        <div className="article-credentials">
          <input
            className="article-name"
            type="text"
            placeholder="Name*"
            name="username"
            value={commentData.username}
            onChange={handleChange}
            required
          />

          <input
            className="article-email"
            type="email"
            placeholder="Email*"
            name="email"
            value={commentData.email}
            onChange={handleChange}
            required
          />
          <input
            className="article-website"
            type="text"
            placeholder="Website"
            name="website"
            value={commentData.website}
            onChange={handleChange}
          />
        </div>
        <div className="article-save-and-button">
          <div className="article-checkbx-content">
            <input type="checkbox" id="save-info" />
            <p>Save my name, email, and website in this browser for the next time I comment.</p>
          </div>
          <div className="article-button-row">
            <button 
              onClick={handleSubmit} 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Post Comment"}
            </button>
            <button onClick={handleFetchComments}>
              {showComments ? "Hide Comments" : "View Comments"}
            </button>
          </div>
        </div>
        {responseMsg && <p className="response-message">{responseMsg}</p>}

        {showComments && comments.length > 0 && (
          <div className="comments-section">
            <h3 className="comments-title">Comments</h3>
            <div className="comments-container">
              {comments.map((item, index) => (
                <div className="comment-item" key={index}>
                  <div className="comment-header">
                    <div className="comment-user">
                      <div className="comment-avatar">{item.username.charAt(0).toUpperCase()}</div>
                      <div className="comment-metadata">
                        <span className="comment-username">{item.username}</span>
                        <span className="comment-date">{formatDate(item.createdAt)}</span>
                      </div>
                    </div>
                    {item.website && (
                      <a 
                        href={item.website.startsWith('http') ? item.website : `https://${item.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="comment-website"
                      >
                        Website
                      </a>
                    )}
                  </div>
                  <div className="comment-content">
                    <p>{item.comment}</p>
                  </div>
                  <div className="comment-email">{item.email}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {showComments && comments.length === 0 && (
          <div className="no-comments">No comments yet. Be the first to comment!</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ArticleFooter;