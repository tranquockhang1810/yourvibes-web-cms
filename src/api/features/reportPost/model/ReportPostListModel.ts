import { UserModel } from "../../authenticate/model/LoginModel"
import { PostResponseModel } from "../../post/models/PostResponseModel"

export interface ReportPostListRequestModel {
  status?: boolean
  reason?: string
  from_date?: string
  to_date?: string
  sort_by?: string
  is_descending?: boolean
  limit?: number
  page?: number
}

export interface ReportPostDetailRequestModel {
  user_id?: string
  reported_post_id?: string
}

export interface ReportPostListResponseModel {
  user_id?: string
  user?: UserModel
  reported_post_id?: string
  reported_post?: PostResponseModel
  admin_id?: string
  reason?: string
  status?: boolean
  created_at?: string
  updated_at?: string
}