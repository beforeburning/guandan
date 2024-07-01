type ApiType = {
  [key: string]: string;
};

export const apiConfig: ApiType = {
  signin: "/v1/member/signin",
  signup: "/v1/member/signup",
  score: "/v1/ask/score",
  query: "/v1/ask/query",
};
