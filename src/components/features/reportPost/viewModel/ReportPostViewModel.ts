import { ResultObject } from '@/api/baseApiResponseModel/baseApiResponseModel';
import { ReportPostListRequestModel, ReportPostListResponseModel } from '@/api/features/reportPost/model/ReportPostListModel';
import { IReportPostRepo } from '@/api/features/reportPost/ReportPostRepo';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

const ReportPostViewModel = (repo: IReportPostRepo) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [resultObject, setResultObject] = useState<ResultObject | undefined>(undefined);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [query, setQuery] = useState<ReportPostListRequestModel>({
    page: 1,
    limit: 10,
    from_date: dayjs().startOf('month').format('YYYY-MM-DDTHH:mm:ss[Z]'),
    to_date: dayjs().endOf('month').format('YYYY-MM-DDTHH:mm:ss[Z]'),
  });
  const [reportedList, setReportedList] = useState<ReportPostListResponseModel[]>([]);

  const getReportedAccounts = async (query: ReportPostListRequestModel) => {
    try {
      setIsLoading(true);
      const res = await repo.getList({
        ...query,
        is_descending: true,
        sort_by: 'created_at',
      });
      if (res) {
        setReportedList(res?.data === null ? [] : res?.data);
        setTotal(res?.paging?.total);
        setLimit(res?.paging?.limit);
        setPage(res?.paging?.page);
      }
    } catch (error) {
      console.error(error);
      setResultObject({
        type: 'error',
        message: "Lỗi hệ thống, vui lòng thử lại!"
      })
    } finally {
      setIsLoading(false);
    }
  }

  const handleTableChange = (pagination?: any) => {
    setPage(pagination?.current);
    setLimit(pagination?.pageSize);
    setQuery({
      ...query,
      page: pagination?.current,
      limit: pagination?.pageSize,
    });
  };

  const getReportDetail = async (id: string) => {
    
  }

  useEffect(() => {
    getReportedAccounts(query);
  }, [query])

  return {
    reportedList,
    isLoading,
    resultObject,
    query,
    setQuery,
    handleTableChange,
    total,
    page,
    limit,
  }
}

export default ReportPostViewModel