# 3ziye.github.io
this is the github website of github.


# 启动 Ruby 容器，挂载当前目录到容器内的 /app 目录
```
docker run -it -p 4000:4000 -v $(pwd):/app -w /app jekyll/jekyll:4 bash
```