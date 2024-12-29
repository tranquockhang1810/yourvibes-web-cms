export const ApiPath = {
  // Auth
  LOGIN: getApiPath("admins/login"),

  //INFO
  UPDATE_INFO: getApiPath("admins/"),

  //ADMIN MANAGEMENT
  GET_ADMINS_LIST: getApiPath("admins/"),
  CREATE_ADMIN: getApiPath("admins/super_admin"),
  UPDATE_ADMIN: getApiPath("admins/super_admin"),

  //REPORT ACCOUNT
  GET_REPORTED_ACCOUNT_LIST: getApiPath("users/report"),
  GET_REPORTED_ACCOUNT_DETAIL: getApiPath("users/report"),
  ACIVATE_REPORTED_USER: getApiPath("users/report/activate"),

  //REPORT POST
  GET_REPORTED_POSTS_LIST: getApiPath("posts/report"),
  GET_REPORTED_POST_DETAIL: getApiPath("posts/report/"),

  //REPORT COMMENT
  GET_REPORTED_COMMENT_LIST: getApiPath("comments/report"),
};

function getApiPath(path: string) {
  return `${process.env.NEXT_PUBLIC_API_ENDPOINT!}/v1/2024/${path}`;
}

