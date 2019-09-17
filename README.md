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

### 服务

在 Nest 应用面，我们可以把控制器上的一些比较复杂的逻辑拿出来单独放在一些叫 Service 的东西里面，Service 就是服务，服务的意思就是能帮我们做一些事情的东西， 创建的服务可以注入到控制器里使用。

```bash
new g s demo posts/providers
```