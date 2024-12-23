import { BaseApiResponseModel } from "@/api/baseApiResponseModel/baseApiResponseModel";
import { ReportCommentListRequestModel, ReportCommentListResponseModel } from "./model/ReportCommentListModel";
import client from "@/api/client";
import { ApiPath } from "@/api/ApiPath";

export interface IReportCommentRepo {
  getList(params: ReportCommentListRequestModel): Promise<BaseApiResponseModel<ReportCommentListResponseModel[]>>
}

class ReportCommentRepo implements IReportCommentRepo {
  async getList(params: ReportCommentListRequestModel): Promise<BaseApiResponseModel<ReportCommentListResponseModel[]>> {
    return client.get(ApiPath.GET_REPORTED_COMMENT_LIST, params);
  }
}

export const defaultReportCommentRepo = new ReportCommentRepo();