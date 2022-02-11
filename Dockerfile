FROM keymetrics/pm2:latest-alpine

# 暴露端口
EXPOSE 9991

WORKDIR /data/release/convert-dashboard-api

# 创建目录
RUN mkdir -p /data/release/convert-dashboard-api

# 复制源码
COPY . /data/release/convert-dashboard-api

# 容器启动时，启动应用服务
CMD ["pm2-runtime", "ecosystem.config.js", "--only", "convert-dashboard-api"]
