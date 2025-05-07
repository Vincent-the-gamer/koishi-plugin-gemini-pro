# koishi-plugin-gemini-pro

[![npm](https://img.shields.io/npm/v/koishi-plugin-gemini-pro?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-gemini-pro)

Gemini Pro对话插件

注意，本插件需要自建后端，仓库我已经准备好了：

[https://github.com/Vincent-the-gamer/gemini-pro-chat-kit](https://github.com/Vincent-the-gamer/gemini-pro-chat-kit)

## 申请Gemini Pro API Key

申请Gemini Pro API Key: https://makersuite.google.com/app/apikey

申请Key的过程请参考我的博客的一部分：
[https://blog.vince-g.xyz/posts/deploy-gemini-pro](https://blog.vince-g.xyz/posts/deploy-gemini-pro)

## 使用方法
在Koishi插件市场安装gemini-pro插件

配置后端的url, 然后打开你的魔法，在后端将代理端口改为你魔法的端口

启用插件，通过命令调用
```shell
# 和ai对话，会累计上下文
ai 你的内容 
# 或
gemini 你的内容

# 清空上下文
ai 清空上下文
# 或
gemini 清空上下文
```
