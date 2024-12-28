type ApiType = {
  [key: string]: string;
};

export const apiConfig: ApiType = {
  signin: "/v1/member/signin",
  signup: "/v1/member/signup",
  score: "/v1/ask/score",
  query: "/v1/ask/query",

  login: "/v1/member/login",
  sendCode: "/v1/member/sendCode",
  articlesList: "/v1/article/list",
  articlesDetail: "/v1/article/detail",
  askQuery: "/v1/ask/query",
  apply: "/v1/ask/apply",
  userUpdate: "v1/member/update",
  upload: "/v1/member/upload",
};
