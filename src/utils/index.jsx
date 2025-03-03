export const httpRequest = async (options, includeToken = false) => {
  const { method = "get", url, params, data, signal } = options;

  const headers = includeToken
    ? {
        Authorization: `Bearer ${
          localStorage.getItem(localStorageKeys?.authToken) ?? ""
        }`,
      }
    : {};

  const axiosConfig = {
    method: method,
    url: url,
    params: params,
    data: data,
    signal,
    headers,
  };

  try {
    const response = await axiosInstance.request(axiosConfig);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const endpoint = {
  RANDOM_MEAL: "https://www.themealdb.com/api/json/v1/1/random.php",
  SEARCH_MEAL: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
  ID_MEAL: "https://www.themealdb.com/api/json/v1/1/lookup.php?i=",
};
