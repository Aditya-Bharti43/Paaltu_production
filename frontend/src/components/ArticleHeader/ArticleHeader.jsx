import React from 'react'
import user_icon from '../../assets/user_icon.png'
import cal_icon from '../../assets/calendar-icon.png'
import comm_icon from '../../assets/comment_icon.png'


import './ArticleHeader.css'
function ArticleHeader() {
  return (
    <div className='article-header-main'>
        <div className='article-header-heading'>
            <p>UNCATEGORIZED</p>
        </div>
        <div className='article-header-divider-content'>
            <div className='article-header-divider1'></div>
            <div className='article-header-content'>
                <div className='article-header-admin'>
                    <img src={user_icon} alt="" />
                    <p>Admin</p>
                </div>
                <div className='article-header-date'>
                    <img src={cal_icon} alt="" />
                    <p>July 4, 2023</p>
                </div>
                <div className='article-header-comment'>
                    <img src={comm_icon} alt="" />
                    <p>No Comments</p>
                </div>
            </div>
            <div className='article-header-divider2'></div>
        </div>
      
    </div>
  )
}

export default ArticleHeader
