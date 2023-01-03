import InfiniteScroll from "react-infinite-scroller";
import { Species } from "./Species";
import { useInfiniteQuery } from "@tanstack/react-query";

interface SpeciesType {
  name: string;
  language: string;
  average_lifespan: string;
}

const initialUrl = "https://swapi.dev/api/species/";
const fetchUrl = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

export function InfiniteSpecies() {
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
    queryKey: ["sw-species"],
    queryFn: ({ pageParam = initialUrl }) => fetchUrl(pageParam),
    getNextPageParam: (lastPage) => lastPage.next || undefined,
  });

  if (isLoading) return <div className="loading">Loading...</div>;
  if (isError && error instanceof Error)
    return <div>Error! {error.message}</div>;

  return (
    <>
      {isFetching && <div className="loading">loading...</div>}
      <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
        {data!.pages.map((pageData) =>
          pageData.results.map(
            ({ name, language, average_lifespan }: SpeciesType) => {
              return (
                <Species
                  key={name}
                  name={name}
                  language={language}
                  averageLifespan={average_lifespan}
                />
              );
            }
          )
        )}
      </InfiniteScroll>
    </>
  );
}
