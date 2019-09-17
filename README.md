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

### 模块

我们可以将应用分成许许多多的模块，每个模块对应应用的一个单独的功能，这里我们可以把所有的模块都放在 modules 这个目录下面

```bash
nest g mo posts
cd src
mkdir modules
mv posts modules
```

如果你使用的是 vscode 编辑器的话，编辑器应该会提示你是否将 posts 目录下 import 的路径更新，选择是可以方便的更新路径的问题。

### 中间件

我们可以用类似下面的命令来创建一个中间件

```bash
nest g mi demo core/middlewares
```

### 异常过滤器

在 Nest 应用里，处理异常用的是 Exception Filter， 这里得到的这个异常的响应是应用里的一个全局 Exception Filter 处理的。

我们也可以创建自己的异常过滤器，去处理应用里面发生的异常情况。在终端，执行一下 nest generate，生成一个 filter，名字是 demo，放在 core/filters 下面。

```bash
nest g f demo core/filters
```

### 管道

在 nestjs 里，管道可以帮我们验证数据和转换数据的格式，在 nestjs 里面内置了一些管道，不过在使用他们之前，我们需要安装两个包

```bash
npm i class-validator class-transformer
```

### 守卫

Guard，可以翻译成守卫，守卫的作用就是决定要不要让请求通过， 就是让请求接触到路由处理器。守卫会在中间件之后，在拦截器还有管道之前被执行。创建守卫我们可以像这样：

```bash
nest g gu demoAuth core/guards
```