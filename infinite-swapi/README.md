# Infinite SWAPI
> 무한 스크롤 w/ Star Wars API

## 1. Intro

## 2. 여기서 구현할 것
### 2.1. Infinite scroll
- 유저가 스크롤을 내릴 때 필요한 데이터만 fetch 실행 (JIT 방식)
- 모든 데이터를 한번에 fetch하는 것보다 더 효율적
- 유저가 버튼을 누르거나, 페이지 끝까지 스크롤하면 fetch 실행

## 3. 사용 기술
### 3.1. useInfiniteQuery
- Pagination과는 다른 API 포맷이 필요
- Pagination에서는...
    - 컴포넌트 상태에서 current page를 추적
    - page number가 바뀌면 새로 쿼리 실행
- jsonplaceholder API 와 Star Wars API는 반환하는 데이터 포맷이 다름
    - jsonplaceholder : 배열 안에 한 포스트에 대한 정보가 객체형태 원소로 존재
    - star wars : 연결 리스트 방식으로 next, prev 프로퍼티에 url을 보유 (연결 리스트)


- 매개변수 부분
- 쿼리 키 : useQuery와 동일
- 쿼리 함수 : pageParam 변수가 인수로 들어가 fetch 함수에 url로 들어가는 형태
    - pageParam
    - 첫 페이지를 디폴트 값으로 설정 필요
    - 이후 next, prev 등은 알아서 할당됨
- getNextPageParam : lastPage가 변수로 들어가는 함수 형태
    - lastPage가 null 이면 마지막 페이지로 인식하여 undefined 반환하도록 단축 평가 사용
    - allPages 변수도 존재하나 잘 쓰진 않음


- 훅스 객체 부분
- 상당 부분 useQuery와 동일
- data : useQuery와 동일하나, pages 프로퍼티 안에 데이터가 있음
- fetchNextPage : 다음 페이지 데이터를 호출하는 함수
- hasNextPage : 다음 페이지가 있는지 불린 값을 반환
### 3.2. react-infinite-scroller
- 무한 스크롤을 빠르게 구현할 수 있는 라이브러리
- InfiniteScroll 컴포넌트를 사용하며 loadMore, hasMore 프로퍼티를 갖는다
    - loadMore : 추가로 fetching할 때 사용할 함수를 할당. fetchNextPage를 넘겨주면 된다
    - hasMore : 더 불러올 데이터가 있는지 확인하는 불린값을 할당. hasNextPage를 넘겨주면 된다