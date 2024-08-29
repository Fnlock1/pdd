#!/bin/bash

# 检查是否提供了模型名称
if [ -z "$1" ]; then
  echo "Usage: ./generate.sh ModelName"
  exit 1
fi

MODEL_NAME=$1
MIGRATION_NAME="create_${MODEL_NAME,,}_table"
CONTROLLER_NAME="${MODEL_NAME}Controller"

# 创建模型
adonis make:model $MODEL_NAME

# 创建迁移
adonis make:migration $MIGRATION_NAME

# 创建控制器
adonis make:controller $CONTROLLER_NAME

echo "Model, Migration, and Controller have been created."
