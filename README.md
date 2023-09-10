# React Query(v4) 튜토리얼

## 목차
1. React Query 101
2. PJT: Blog-em Ipsum

## 1. React Query 101
### 1.1. React Query가 해결하는 문제
- React Query는 클라이언트에서 서버 데이터의 캐시를 보유
  - 클라이언트가 직접 fetch or axios를 사용할 필요 없음

### 1.2. 데이터 관리
서버에서 새 데이터를 받아와 캐시를 업데이트하는 방법 2가지
- 데이터 무효화 (절차적)
- re-fetch 시점 or 이벤트를 설정 (선언적)
  - e.g. window focus, pre-fetch

### 1.3. isFetching vs isLoading
- isFetching : fetching Promise가 아직 resolve 되지 않은 상태
  - 말 그대로 fetching 중인 상태
- isLoading : 캐시 데이터가 없는 상태 + isFetching
  - fetching중이고 캐시된 데이터가 없는 상태
  - re-fetch는 해당되지 않음 (데이터가 없어야 함)

### 1.4. isError
- fetch error 발생한 상태
- (기본값) 3회의 re-fetch 시도 후에 error로 판정

### 1.5. stale data
- stale data에 대해서만 refetch가 발생
- staleTime : 데이터의 유통 기한 (얼마나 오래되어도 괜찮은지)
  - 기본값 : 0 (기본적으로 모든 데이터를 stale하다고 인식)

### 1.6. cacheTime
- cache data : 나중에 재사용될지도 모르는 데이터
  - fetching중에 화면에 미리 표시되어 UX 향상
- cacheTime(기본값 5분) : cacheTime이 지나면 cache data가 만료됨
  - 마지막으로 실행된 useQuery로부터 시간 계산
  - 캐시가 만료되면 가비지 컬렉팅 실행

### 1.7. query key
- queryKey 배열에 fetch function의 인수를 전달하면, 각 query를 구별할 수 있다
- 그렇지 않으면 아래의 트리거 발생 이외에는 하나의 동일한 쿼리키로 인식되어 캐시된 데이터가 적용된다

refetch를 유발하는 트리거 종류
- component remount
- window refocus
- running refetch function
- automated refetch
- query invalidation


## 2. PJT: Blog-em Ipsum
### 소개
> Lorem Ipsum 텍스트로 가상의 게시판 구현
- jsonplaceholder API에서 게시글, 작성자, 댓글 등의 데이터 수집
- React Query의 Pagination 기능을 활용해 게시판 페이지 구현
- Prefetching으로 다음 페이지 데이터를 미리 받아와 매끄러운 페이지 전환 구현
### 구성 요소
- jsonplaceholder API
- React Query

## 3. PJT: Infinite SWAPI
### 소개
> Star Wars 데이터를 나열하는 무한 스크롤 구현
- SWAPI (Star Wars API) 에서 주요 인물, 종족 항목 데이터 수집
- React Query의 useInfiniteQuery 훅스 및 react-infinite-scroller 라이브러리를 활용해 무한 스크롤 구현
### 구성 요소
- SWAPI (Star Wars API)
- React Query
- react-infinite-scroller