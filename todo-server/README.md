# todo-server

## 사용 방법

서버 실행

```sh
yarn dev
```

## Notes

#### package.json 설명

```json
  // ...
  "scripts": {
    // 컴파일후 서버 실행
    "start": "tsc && node dist/app.js",
    // 노드몬 watch mode로 실행하고 노드몬 실행이 완료되면 ts-node로 컴파일안하고 서버 실행
    "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/app.ts"
  },
  // ...
```
