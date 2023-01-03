import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "@tanstack/react-query";

import { Person } from "./Person";

interface PersonType {
  name: string;
  hair_color: string;
  eye_color: string;
}

const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function InfinitePeople() {
  // TODO: get data for InfiniteScroll via React Query
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery({
    queryKey: ["sw-people"],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage) => lastPage.next || undefined,
  });

  // isLoading 대신 isFetching을 사용하면 스크롤 내리고 fetching할때 스크롤이 위로 올라가버림
  // 새로운 페이지가 열릴 때마다 조기 반환되서 그럼
  if (isLoading) return <div className="loading">loading...</div>;
  if (isError && error instanceof Error)
    return <div>Error! {error.toString()}</div>;

  return (
    <>
      {isFetching && <div className="loading">Loading...</div>}
      <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
        {data!.pages.map((pageData) =>
          pageData.results.map(
            ({ name, hair_color, eye_color }: PersonType) => {
              return (
                <Person
                  key={name}
                  name={name}
                  hairColor={hair_color}
                  eyeColor={eye_color}
                />
              );
            }
          )
        )}
      </InfiniteScroll>
    </>
  );
}
