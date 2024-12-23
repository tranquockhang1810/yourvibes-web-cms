import { BaseApiResponseModel } from "@/api/baseApiResponseModel/baseApiResponseModel";
import { ReportAccountListRequestModel, ReportAccountListResponseModel } from "./model/ReportAccountListModel";
import client from "@/api/client";
import { ApiPath } from "@/api/ApiPath";

export interface IReportAccountRepo {
  getList(params: ReportAccountListRequestModel): Promise<BaseApiResponseModel<ReportAccountListResponseModel[]>>
}

class ReportAccountRepo implements IReportAccountRepo {
  async getList(params: ReportAccountListRequestModel): Promise<BaseApiResponseModel<ReportAccountListResponseModel[]>> {
    return client.get(ApiPath.GET_REPORTED_ACCOUNT_LIST, params);
  }
}

export const defaultReportAccountRepo = new ReportAccountRepo();