import { CommentsResponseModel } from '@/api/features/post/models/CommentResponseModel'
import { Avatar } from 'antd'
import React from 'react'

const Comment = ({
  comment
}: {
  comment: CommentsResponseModel
}
) => {
  return (
    <div
      className="comment-item bg-gray-50 p-4 rounded-lg shadow-sm text-sm hover:shadow-md"
    >
      <div className="comment-header flex items-center mb-3">
        <Avatar src={comment.user.avatar_url} size="small" />
        <div className="ml-3">
          <p className="text-gray-800 font-semibold">
            {comment.user.family_name} {comment.user.name}
          </p>
          <p className="text-gray-500 text-xs">
            {new Date(comment.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment