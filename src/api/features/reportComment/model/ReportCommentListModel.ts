export interface ReportCommentListRequestModel {
  status?: boolean
  reason?: string
  from_date?: string
  to_date?: string
  sort_by?: string
  is_descending?: boolean
  limit?: number
  page?: number
}

export interface ReportCommentListResponseModel {
  user_id?: string
  reported_comment_id?: string
  admin_id?: string
  reason?: string
  status?: boolean
  created_at?: string
  updated_at?: string
}