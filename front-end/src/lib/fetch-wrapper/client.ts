type FetchWrapperOptions = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: object;
};

export async function fetchWrapper({
  url,
  method = "GET",
  body,
}: FetchWrapperOptions) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    });

    return response;
  } catch (error) {
    console.error(error);
    return;
  }
}
