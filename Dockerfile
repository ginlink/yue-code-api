FROM keymetrics/pm2:latest-alpine

# 暴露端口
EXPOSE 3060

WORKDIR /data/release/yue-code-api

# 创建目录
RUN mkdir -p /data/release/yue-code-api

# 复制源码
COPY . /data/release/yue-code-api

# 容器启动时，启动应用服务
CMD ["pm2-runtime", "ecosystem.config.js", "--only", "yue-code-api"]
