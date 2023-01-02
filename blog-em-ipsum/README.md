# Blog-em Ipsum
## 1. Intro
- jsonplaceholder API에서 제공하는 lorem insum 데이터를 블로그형태로 UI에 전달
## 2. Work flow
### 2.1. install package
- @tanstack/react-query
- @tanstack/react-query-devtools
### 2.2. create QueryClient and add QueryProvider
- App.tsx
### 2.3. useQuery for data
- data, isLoading, isFetching, isError, error 등
- re-fetch가 필요하면 staleTime 설정 (디폴트: 0ms)
- cacheTime을 설정해서 inactivity 상태 이후에 얼마나 오래 데이터를 보관할지 설정 (기본값 5분)
- 쿼리 키를 배열 형태로 전달 + 의존성 배열
- prefetching
- pagination# Blog-em Ipsum
## 1. Intro
- jsonplaceholder API에서 제공하는 lorem insum 데이터를 블로그형태로 UI에 전달
## 2. Work flow
### 2.1. install package
- @tanstack/react-query
- @tanstack/react-query-devtools
### 2.2. create QueryClient and add QueryProvider
- App.tsx
### 2.3. useQuery for data
- data, isLoading, isFetching, isError, error 등
- re-fetch가 필요하면 staleTime 설정 (디폴트: 0ms)
- cacheTime을 설정해서 inactivity 상태 이후에 얼마나 오래 데이터를 보관할지 설정 (기본값 5분)
- 쿼리 키를 배열 형태로 전달 + 의존성 배열 
- prefetching
- pagination
- useMutation
- useMutation