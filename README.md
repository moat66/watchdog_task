







# 如果对你有帮助请给我点一个免费的star吧

⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

# 项目说明

本服务是一个脚本运行交互通知框架，目的是整合多语言脚本（目前仅支持js脚本）的调用及数据交互，目前已支持的通讯端点有 企业微信、微信（千寻框架）、QQ（[go-cqhttp](https://github.com/Mrs4s/go-cqhttp)）、[微信公众号](https://mp.weixin.qq.com/)、WEB通讯端点，对[青龙面板](https://github.com/whyour/qinglong)的统一管理，内置脚本任务包括青龙面板环境变量同步脚本、[pandora-next](https://github.com/pandora-next/deploy)会话脚本

![image-20231227214917412](https://s2.loli.net/2023/12/27/fkMVQNW3xP2G5Sv.png)

![image-20231227215423357](https://s2.loli.net/2023/12/28/fWZGAjYPzsJqReT.png)

## 已实现功能

1. [青龙面板](https://github.com/whyour/qinglong)统一控制（目前支持到2.14.9版本，其后版本未测试，期待你们的反馈）

2. 多消息通讯端点

   | 通讯端点类型 |                   服务提供方                    |             使用配置方式              |
   | :----------: | :---------------------------------------------: | :-----------------------------------: |
   |      QQ      | [go-cqhttp](https://github.com/Mrs4s/go-cqhttp) |       [QQ通讯端点](#QQ通讯端点)       |
   |     微信     |                    千寻框架                     |     [微信通讯端点](#微信通讯端点)     |
   |  微信公众号  |   [微信公众品平台](https://mp.weixin.qq.com/)   | [微信公众通讯端点](#微信公众通讯端点) |
   |   企业微信   |     [企业微信](https://work.weixin.qq.com/)     | [企业微信通讯端点](#企业微信通讯端点) |
   |     WEB      |                  本项目自提供                   |      [WEB通讯端点](#WEB通讯端点)      |

3. 消息快捷回复（解析消息关键字触发回复）

4. 开放API管理 

5. 环境变量管理（统一分发、管理青龙面板环境变量，实现私有变量与脚本任务配置交互）

6. 自定义数据管理（用于提高本服务指令脚本应用的上限）

7. 指令脚本管理（目前仅可运行js脚本，支持：定时脚本任务、指令唤醒脚本、多步骤任务、长会话任务、脚本在线编辑）

8. 多端用户统一管理（多端用户主动合并、积分、权重）

9. 系统日志及脚本任务日志

10. 项目全可视化配置

11. 安全相关：登录安全策略、敏感操作通知、TOTP二步认证、公开接口流控、WEB注册及邮件激活、配置文件加密

12. 其它支持：邮件服务、邮件模板、消息流控、自提供的脚本任务、代码对比工具



## 开发计划

1. 更加开放的脚本任务环境

   实现对脚本仓库的管理，可主动拉取其它第三方开发者提供的脚本任务

2. 更多的通讯端点

   | 通讯端点类型 |            服务提供方             |
   | :----------: | :-------------------------------: |
   |     钉钉     | [钉钉](https://www.dingtalk.com/) |

3. 对node、python、shell依赖的统一管理

4. 更多脚本类型支持

   目前仅封装了js脚本库，后继将引入shell、python脚本的支持

5. 引人SQLite数据库的支持

6. 如果你有新的需求请提交ISSUE吧，我将判断可行性并安排开发计划



# 部署方法

这里仅阐释docker部署方法，本机部署方式由于涉及的环境配置较多，这里不推荐

部署前置环境条件 **docker、git**

1. 在你认为合适的位置，使用git拉取watchdog_task

   ```sh
   git clone https://github.com/moat66/watchdog_task.git
   ```

2. 进入刚拉取的文件目录

   ```sh
   cd watchdog_task
   ```

3. 运行docker容器

   ENCRYPTOR_PASS说明：请填写你的配置文件加密密码并牢记该密码，该密码用于加密你配置文件中的敏感信息（若遗失，在你需要对本服务迁移时，本服务将无法加载已加密的配置信息，需重新配置！！！）

   ```sh
   docker run -itd \
   --restart always \
   -v $PWD:/watchdog \
   -p 5760:5760 \
   -e ENCRYPTOR_PASS="填写你的配置文件加密密码" \
   --privileged=true \
   --name watchdog_task \
   moat6/watchdog_task:laster
   ```




# 服务配置

## 服务初始化配置

部署完毕后访问服务地址，你的**ip:服务端口号**  例如：127.0.0.1:5760 进入项目初始化配置

1. MySQL数据库配置

   需要自行安装MySQL，**版本需要5.7及以上版本**，本服务docker镜像内不包含MySQL环境，MySQL可以使用如[宝塔面板](https://github.com/aaPanel/BaoTa)、[1Panel](https://github.com/1Panel-dev/1Panel)、docker(不推荐、需要有开发经验)等方法安装，我这里不赘述MySQL安装步骤，自行[百度](https://www.baidu.com/)

   1.1 创建数据库

   ​	   我这里使用[1Panel](https://github.com/1Panel-dev/1Panel)演示，[宝塔面板](https://github.com/aaPanel/BaoTa)类似

   ​		![image-20231227213509397](https://s2.loli.net/2023/12/27/Ei1B2WFJUyHaO8G.png)

![image-20231227213557991](https://s2.loli.net/2023/12/27/aXgfMC1i7dkAsUz.png)

​		1.2 填写你的MySQL地址以及刚创建的数据库信息后提交![image-20231227213816757](https://s2.loli.net/2023/12/27/opdJTIE4evKaV7Q.png)

 2. 配置你的后台登陆密码，不推荐使用**弱口令**。提交后等待服务重启完毕！

    ![image-20231227214217063](https://s2.loli.net/2023/12/27/5CketvG7hmqNxDB.png)

   3. 其它配置，鼠标放置在标题上会触发提示，服务地址：在脚本调用中、图片发送、邮件注册等功能中都有使用，根据自己的需求配置本服务地址（一般情况下推荐为外网可访问到本服务的地址）

      ![image-20231228104311773](https://s2.loli.net/2023/12/28/6lWBgeNhEtCLdix.png)

​	至此项目的基础配置就已经完毕了



## 通讯端点配置

本服务仅提供了内置的WEB通讯端点，其它三方通讯端若需要与本服务进行数据交互，需要自行注册或搭建服务并进行相应的通讯端点配置。

### QQ通讯端点

该通讯端点依赖于[go-cqhttp](https://github.com/Mrs4s/go-cqhttp)

​	**go-cqhttp安装配置**

 1. 在你认为合适的位置创建cqhttp的文件夹并进入

    ```shell
    mkdir cqhttp && cd cqhttp
    ```

 2. 运行docker容器

    ```shell
    docker run -it \
      -v $PWD:/data \
      --network host \
      --name cqhttp \
      ghcr.io/mrs4s/go-cqhttp:master
    ```

3. 选择通讯方式输入：**02**（**HTTP通信**和**正向 Websocket 通信**）

   ![image-20231228161806052](https://s2.loli.net/2023/12/28/VSqa6HbT8YFrzNe.png)

 4. 修改配置文件信息，修改完毕后保存退出

    ```shell
    vi config.yml
    ```

    ![image-20231228162013756](https://s2.loli.net/2023/12/28/B2hJSayqXcGM9lE.png)

![image-20231228162104680](https://s2.loli.net/2023/12/28/OyhTG3dcoYFxCjK.png)

![image-20231228162332322](https://s2.loli.net/2023/12/28/6urcodDeKYLW2qG.png)

  5. 启动cqhttp生成device.json配置文件，并查看日志

     ```shell
     docker start cqhttp && docker logs -f cqhttp
     ```

 6. 编辑device.json的**protocol类型为2**（目前仅手表协议可扫码登录）

    ```shell
    vi device.json
    ```

    ![image-20231228163218969](https://s2.loli.net/2023/12/28/BG31mqi4shpNfQn.png)

7. 再次启动准备使用手机扫码登录

   ```shell
   docker start cqhttp && docker logs -f cqhttp
   ```

   ![image-20231228163506423](https://s2.loli.net/2023/12/28/gIHd4hMxLjKSci8.png)

![image-20231228163607572](https://s2.loli.net/2023/12/28/c9udgJbWSzZYG52.png)

​	8. 至此go-cqhttp服务部署配置完毕，将该服务接口加入到项目中进行监听

![image-20231228163840537](https://s2.loli.net/2023/12/28/Gf9udJ3qTCFSPrw.png)

1. 名称：内容随意
2. http：为go-cqhttp的http通讯地址
3. ws：为go-cqhttp正向ws通讯地址
4. token：若go-cqhttp设置了访问密钥则需要填写此项
5. 启用：是否使用这个服务
6. 通过好友申请：有好友申请时是否自动审批
7. 通过入群申请：有入群申请时是否自动审批
8. 监听群列表：要监听群聊的群号，每行一个
9. 黑名单列表：要拉黑的QQ账号，每行一个
10. 好友欢迎语：审批通过后自动发送的好友欢迎语
11. 入群欢迎语：监听的群聊中有新成员加入，自动@并发送消息


### 微信通讯端点

千寻框架请自行寻找

![image-20231228171001999](https://s2.loli.net/2023/12/28/6k5qjIbdTnNDgmU.png)

1. 名称：内容随意
2. wxid：你的wxid可在千寻框架中复制，**需要注意此wxid不是你的微信号**
3. http：为千寻框架http通讯地址
4. 启用：是否使用这个服务
5. 通过好友申请：有好友申请时是否自动审批
6. 监听群列表：要监听群聊的wxid，每行一个
7. 黑名单列表：要拉黑的wxid，每行一个
8. 好友欢迎语：审批通过后自动发送的好友欢迎语



### 微信公众通讯端点

依赖于[微信公众平台](https://mp.weixin.qq.com/)，**推荐使用服务号或测试号**、个人订阅号由于权限较低不推荐，**请注意如果你的服务不是在80或443端口需要进行反向代理，不然无法正常配置**

1. **配置开发者信息及IP白名单**

![image-20231228173156302](https://s2.loli.net/2023/12/28/FOn7AVEBNbCU2km.png)

2. 添加微信公众通信端点服务配置**并提交**

   ![image-20231228174443609](https://s2.loli.net/2023/12/28/5UlWTxRkwHt428h.png)
   1. 名称：名称随意
   2. appId：通过微信公众号基本配置中查看
   3. appSecret：通过微信公众号基本配置中查看
   4. token：在修改修改服务器配置时 填入的 token
   5. 消息解密密钥：在修改服务器配置时查看 EncodingAESKey （随机生成）
   6. 启用：是否使用这个服务
   7. 关注欢迎语：用户关注公众号后发送的欢迎语

3. 修改公众号服务器配置，**请确认通过您的外网IP 地址或者域名能够正常访问到本服务，否则提示token认证失败**

![image-20231228174630371](https://s2.loli.net/2023/12/28/DtlfWT4vay3GRr8.png)



### 企业微信通讯端点

依赖于[企业微信](https://work.weixin.qq.com/)

1. 创建应用

![image-20231228184645923](https://s2.loli.net/2023/12/28/nzyVYx2OUf5vNTd.png)

2. 应用管理 -> 开发者接口 -> 配置企业可信IP

   ![image-20231228184826289](https://s2.loli.net/2023/12/28/jWMCXAlU37TqLa8.png)

3. 添加企业微信通信端点服务配置**并提交**

   ![image-20231228193007710](https://s2.loli.net/2023/12/28/gdbo4mJ1kTMOv2c.png)

   1. 名称：名称随意
   2. 企业ID：通过企业微信我的企业中查看
   3. 应用ID：通过企业微信 -> 应用 -> AgentId 查看
   4. 应用密钥：通过企业微信 -> 应用 -> Secret 查看
   5. token：在修改API接收消息时 填入的 token （随机生成）
   6. 消息解密密钥：在修改API接收消息时查看 EncodingAESKey （随机生成）
   7. 启用：是否使用这个服务

4. 应用管理 -> 功能 -> 设置API管理

   **请确认通过您的外网IP 地址或者域名能够正常访问到本服务，否则提示openapi回调地址请求不通过**

   ![image-20231228192457919](https://s2.loli.net/2023/12/28/X1qHrzS8poPAijR.png)

![image-20231228192626449](https://s2.loli.net/2023/12/28/DyYrojJd1lEzhuf.png)



### WEB通讯端点

web通讯端点的相关配置，包含了注册、登录、邮件、消息流控。鼠标放置在标题上会触发相关提示

![image-20231228144634996](https://s2.loli.net/2023/12/28/mWKO7qv9lc8EMsg.png)





# 开发者文档

1. 可开启系统的接口文档，修改**watchdog.doc.enable为true**后，重启服务器即可访问接口文档页 {服务地址}/doc.html 例如：http://localhost:8080/doc.html

   ![image-20231228142255386](https://s2.loli.net/2023/12/28/ktHygIUL3YFwbEl.png)

2. 脚本文件的开发，详细接口调用请参照本服务根路径下，所对应**app/data/scripts/api**文件夹下所封装的方法，内有详细说明

   ![image-20231228143148272](https://s2.loli.net/2023/12/28/PChLAWkD3wRxuog.png)



# 关于 ISSUE

以下 ISSUE 会被直接关闭

- 提交 BUG 不使用 Template
- 询问已知问题
- 提问找不到重点
- 重复提问

请注意, 开发者并没有义务回复您的问题. 您应该具备基本的提问技巧。
有关如何提问，请阅读[《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)



