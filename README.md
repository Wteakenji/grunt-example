### grunt使用教程

1. (只需要安装一次，以后都不用了）全局安装grunt-cli(需要用到管理员权限，windows下右键cmd.exe用管理员权限打开安装：npm install -g grunt-cli
1. 命令行进入到项目目录
1. npm init初始化，建立了package.json文件
1. 安装grunt到本地：npm install grunt --save-dev
1. 安装grunt插件到本地：npm install 插件名 --save-dev
1. 在本地文件夹下新建一个Gruntfile.js文件（定义了任务1：task1）
1. 执行任务1：grunt task1

>------------------------

### Gruntfile.js文件写法或语法
#### 插件加载代码

这个就超级简单了，由于上面任务需要用到 grunt-contrib-uglify，当 grunt-contrib-uglify 安装到我们的项目之后，写下下面代码即可加载：

    grunt.loadNpmTasks('grunt-contrib-uglify');
    

#### [](#任务注册代码 "任务注册代码")任务注册代码

插件也加载了，任务也布置了，下面我们得注册一下任务，使用

    grunt.registerTask('default', ['uglify']);
    

来注册一个任务。上面代码意思是，你在 default 上面注册了一个 Uglify 任务，default 就是别名，它是默认的 task，当你在项目目录执行 grunt 的时候，它会执行注册到 default 上面的任务。

也就是说，当我们执行 grunt 命令的时候，uglify 的所有代码将会执行。我们也可以注册别的 task，例如：

    grunt.registerTask('compress', ['uglify:build']);
    

如果想要执行这个 task，我们就不能只输入 grunt 命令了，我们需要输入 `grunt compress` 命令来执行这条 task，而这条 task 的任务是 uglify 下面的 build 任务，也就是说，我们只会执行 uglify 里面 build 定义的任务，而不会执行 uglify 里面定义的其他任务。

**这里需要注意的是，task 的命名不能与后面的任务配置同名，也就是说这里的 compress 不能命名成 uglify，这样会报错或者产生意外情况**