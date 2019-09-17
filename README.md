# NestJs

在这里我会记录一下学习 nestjs 的时候使用到的一些东西。

### 创建项目

我们需要先在全局安装 nestjs，接着可以用它来创建项目。

```bash
npm i -g @nestjs/cli
nest new honest-nest
cd honest-nest
npm run start:dev
```

### 命令

先熟悉一下 nestjs 的命令

```bash
# 查看 nestjs 所有的命令
nest --help
# 模拟创建控制器 --dry-run 不会真的创建 g = generate | co = controller
nest g co posts --dry-run
```