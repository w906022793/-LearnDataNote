const t=JSON.parse('{"key":"v-e6f7cb8e","path":"/posts/2017-10-18-light_cat_e8-c-epon_admin.html","title":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)","lang":"zh-CN","frontmatter":{"title":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)","date":"2017-10-18T18:28:00.000Z","category":["网络"],"tag":["光猫"],"order":-7,"description":"为什么要获得光猫超级密码？ *端口映射 (eMule high ID)、桥接模式（路由器掌控拨号，不能兼容固定电话）。*网上关于光猫超级密码的获取攻略都在 2012-14 年，已经无法使用了。 测试环境 运营商：上海电信 设备：贝尔 E8-C-EPON 硬件版本：RG201O-CA_V1A2 软件版本：E201OCAA2V11S 光猫超级密码破解步骤 地址栏输入 192.168.1.1，用户名：光猫背面，密码：光猫背面，登陆管理界面。 浏览器地址栏输入 192.168.1.1/backupsettings.txt，将 backupsettings.txt 文件导出并备份在电脑上。 如果打不开上面的地址，改为输入 192.168.1.1/backupsettings.conf，并做好备份。 打开下载好的文档 backupsettings.txt 或 backupsettings.conf，搜索 TeleComAccount，两个 password 间就是超级密码。超级账号是 telecomadmin。 地址栏输入 192.168.1.1，用刚获取的超级密码登陆，然后开始端口映射和设备桥接了。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2017-10-18-light_cat_e8-c-epon_admin.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"光猫改造 篇一：超级管理员密码破解（E8-C-EPON RG201O-CA_V1A2)"}],["meta",{"property":"og:description","content":"为什么要获得光猫超级密码？ *端口映射 (eMule high ID)、桥接模式（路由器掌控拨号，不能兼容固定电话）。*网上关于光猫超级密码的获取攻略都在 2012-14 年，已经无法使用了。 测试环境 运营商：上海电信 设备：贝尔 E8-C-EPON 硬件版本：RG201O-CA_V1A2 软件版本：E201OCAA2V11S 光猫超级密码破解步骤 地址栏输入 192.168.1.1，用户名：光猫背面，密码：光猫背面，登陆管理界面。 浏览器地址栏输入 192.168.1.1/backupsettings.txt，将 backupsettings.txt 文件导出并备份在电脑上。 如果打不开上面的地址，改为输入 192.168.1.1/backupsettings.conf，并做好备份。 打开下载好的文档 backupsettings.txt 或 backupsettings.conf，搜索 TeleComAccount，两个 password 间就是超级密码。超级账号是 telecomadmin。 地址栏输入 192.168.1.1，用刚获取的超级密码登陆，然后开始端口映射和设备桥接了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-19T02:40:06.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"光猫"}],["meta",{"property":"article:published_time","content":"2017-10-18T18:28:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-12-19T02:40:06.000Z"}]]},"headers":[{"level":2,"title":"为什么要获得光猫超级密码？","slug":"为什么要获得光猫超级密码","link":"#为什么要获得光猫超级密码","children":[{"level":3,"title":"测试环境","slug":"测试环境","link":"#测试环境","children":[]}]},{"level":2,"title":"光猫超级密码破解步骤","slug":"光猫超级密码破解步骤","link":"#光猫超级密码破解步骤","children":[]}],"git":{"createdTime":1671417606000,"updatedTime":1671417606000,"contributors":[{"name":"w906022793","email":"10907574w@sina.com","commits":1}]},"readingTime":{"minutes":1.04,"words":313},"filePathRelative":"_posts/2017-10-18-light_cat_e8-c-epon_admin.md","localizedDate":"2017年10月18日","excerpt":"<h2> 为什么要获得光猫超级密码？</h2>\\n<p>*端口映射 (eMule high ID)、桥接模式（路由器掌控拨号，不能兼容固定电话）。*网上关于光猫超级密码的获取攻略都在 2012-14 年，已经无法使用了。</p>\\n<h3> 测试环境</h3>\\n<p>运营商：上海电信\\n设备：贝尔 E8-C-EPON\\n硬件版本：RG201O-CA_V1A2\\n软件版本：E201OCAA2V11S</p>\\n<h2> 光猫超级密码破解步骤</h2>\\n<ol>\\n<li>\\n<p>地址栏输入 <code>192.168.1.1</code>，用户名：光猫背面，密码：光猫背面，登陆管理界面。</p>\\n<figure><img src=\\"https://pic1.zhimg.com/v2-9e43bc86b9095f3f6c2cfa4bd58dcd68_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>浏览器地址栏输入 <code>192.168.1.1/backupsettings.txt</code>，将 <code>backupsettings.txt</code> 文件导出并备份在电脑上。\\n如果打不开上面的地址，改为输入 <code>192.168.1.1/backupsettings.conf</code>，并做好备份。</p>\\n</li>\\n<li>\\n<p>打开下载好的文档 <code>backupsettings.txt</code> 或 <code>backupsettings.conf</code>，搜索 <code>TeleComAccount</code>，两个 password 间就是超级密码。超级账号是 telecomadmin。</p>\\n<figure><img src=\\"https://pic3.zhimg.com/v2-ee441dd18cc8e5f6303fdaef82b6d476_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>地址栏输入 <code>192.168.1.1</code>，用刚获取的超级密码登陆，然后开始端口映射和设备桥接了。</p>\\n<figure><img src=\\"https://pic1.zhimg.com/v2-31d6bb6b90be541c186a360fe2dd323c_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};