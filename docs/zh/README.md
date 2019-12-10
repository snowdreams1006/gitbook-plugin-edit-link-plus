# 欢迎访问 gitbook-plugin-edit-link-plus 官网👋

[![npm:version](https://img.shields.io/npm/v/gitbook-plugin-edit-link-plus.svg)](https://www.npmjs.com/package/gitbook-plugin-edit-link-plus)
[![npm:download](https://img.shields.io/npm/dt/gitbook-plugin-edit-link-plus.svg)](https://www.npmjs.com/package/gitbook-plugin-edit-link-plus)
[![npm:prerequisite](https://img.shields.io/badge/gitbook-*-blue.svg)](https://www.npmjs.com/package/gitbook-plugin-edit-link-plus)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/gitbook-plugin-edit-link-plus.svg)](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![website:snodreams1006.tech](https://img.shields.io/badge/website-snowdreams1006.tech-brightgreen.svg)](https://snowdreams1006.tech/)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> 添加 “编辑此页” 链接并智能识别 `Github` 或 `Gitlab` 源存储库的 `Gitbook` 插件.

[中文](/zh/) | [English](/en/)

### 🏠 [主页](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus#readme)

- Github : [https://snowdreams1006.github.io/gitbook-plugin-edit-link-plus/](https://snowdreams1006.github.io/gitbook-plugin-edit-link-plus/)
- GitLab : [https://snowdreams1006.gitlab.io/gitbook-plugin-edit-link-plus/](https://snowdreams1006.gitlab.io/gitbook-plugin-edit-link-plus/)
- Gitee : [https://snowdreams1006.gitee.io/gitbook-plugin-edit-link-plus/](https://snowdreams1006.gitee.io/gitbook-plugin-edit-link-plus/)

## 屏幕截图

![edit-link-plus-use-preview.png](edit-link-plus-use-preview.png)

## 用法

### 步骤＃1-更新`book.json`文件

1. 在您的gitbook的`book.json`文件中，将`edit-link-plus`到`plugins`列表。
2. 在`pluginsConfig` ，设置`base`值，该`base`值是github或gitlab或其他代码存储库的基本路径。不需要尾部斜杠。
3. 默认情况下，链接标签为“编辑此页”。您可以使用插件配置`label`进行更改。
4. 在`pluginsConfig` ，设置`defaultBase`值，该值设置为github或gitlab或其他代码存储库的默认基本路径。也不需要尾部斜杠。

这是最简单的示例：

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book"
        }
    }
}
```

此外，受支持的配置选项如下：

```json
"base": {
  "type": [
    "string",
    "object"
  ],
  "title": "Base for the edit redirection",
  "required": true
},
"defaultBase": {
  "type": "string",
  "title": "Default base for the edit redirection",
  "required": false
},
"label": {
  "type": [
    "string",
    "object"
  ],
  "title": "Label for the edit button",
  "default": "Edit This Page",
  "required": false
}
```

### 步骤＃2-gitbook命令

1. 运行`gitbook install` 。它将自动为您的书安装`edit-link-plus` gitbook插件。仅需要一次。

```bash
gitbook install
```

或者，您可以运行`npm install gitbook-plugin-edit-link-plus`进行本地安装。

```bash
npm install gitbook-plugin-edit-link-plus
```

1. 像往常一样构建您的书（ `gitbook build` ）或服务（ `gitbook serve` ）。

```bash
gitbook serve
```

## 示例

- 官方文档配置文件

> [https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/docs/book.json](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/docs/book.json)

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": {
              "snowdreams1006.github.io":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/docs",
              "snowdreams1006.gitlab.io":"https://gitlab.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/docs",
              "snowdreams1006.gitee.io":"https://gitee.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/docs"
            },
            "defaultBase": "https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/docs",
            "label": "Edit This Page"
        }
    }
}
```

- 官方示例配置文件

> [https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/example/book.json](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/example/book.json)

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/example"
        }
    }
}
```

### 示例`book.json`文件

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/example"
        }
    }
}
```

或者您可以添加`label`以自定义标签：

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": "点我反馈"
        }
    }
}
```

### 用于多源基础的样本`book.json`文件

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": {
              "USER.github.io":"https://github.com/USER/REPO/edit/BRANCH/path/to/book",
              "USER.gitlab.io":"https://gitlab.com/USER/REPO/edit/BRANCH/path/to/book",
              "USER.gitee.io":"https://gitee.com/USER/REPO/edit/BRANCH/path/to/book",
              "CUSTOME DOMAIN":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/docs"
            },
            "defaultBase": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": "Edit This Page"
        }
    }
}
```

### 用于多语言标签的样例`book.json`文件

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": {
                "en": "Edit This Page",
                "zh": "编辑本页"
            }
        }
    }
}
```

**注意** ：如果您的书还没有，以上代码段可以用作完整的`book.json`文件。

**Github / Gitlab** ：在字符串`...REPO/edit/BRANCH...` ，如果希望源文件以读取模式打开，而不是直接在github / gitlab上以编辑模式打开，则可以用`tree`替换`edit` 。

## 作者

👤 **snowdreams1006**

- 网站： [snowdreams1006.tech](https://snowdreams1006.tech/)
- [GitHub](https://github.com/snowdreams1006) ： [@ snowdreams1006](https://github.com/snowdreams1006)
- 电子邮件： [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## 贡献

欢迎提供文稿，问题和功能请求！ <br>随时检查[问题页面](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/issues) 。

## 表示支持

如果这个项目对您有帮助，请给个[**星星**](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus) ！

## 版权

版权所有©2019 [snowdreams1006](https://github.com/snowdreams1006) 。

该项目是[MIT](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/LICENSE)许可的。

## 感谢

- [gitbook-plugin-editlink](https://github.com/zhaoda/gitbook-plugin-editlink)
- [gitbook-plugin-edit-link](https://github.com/rtCamp/gitbook-plugin-edit-link)

## 故障排除

1. 如果没有看到“编辑此页面”链接，请检查`book.json`是否有效。您可以使用此在线工具[-http://json.parser.online.fr/beta/](http://json.parser.online.fr/beta/)
2. 检查您是否使用默认的gitbook主题。不建议直接修改gitbook主题。
