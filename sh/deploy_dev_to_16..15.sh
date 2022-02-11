#!/bin/sh
eval $(ssh-agent -s)

#将ssh private key 放入当前服务器，这样才可以登录远端服务器
echo "$PRIVATE_KEY" > deploy.key

mkdir -p ~/.ssh
chmod 0600 deploy.key
ssh-add deploy.key

echo "Host *\n\tStrictHostKeyChecking no\n\n" >> ~/.ssh/config

#复制一些东西
scp sh/deploy_dev_docker_pull.sh $HOST_NAME_15@$ADMIN_HOST_15:~/sh/
scp docker-compose-dev.yml $HOST_NAME_15@$ADMIN_HOST_15:~/sh/

#登录远端服务器并执行命令
ssh $HOST_NAME_15@$ADMIN_HOST_15 "cd sh && sh deploy_dev_docker_pull.sh"
