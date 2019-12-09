# Welcome gitbook-plugin-edit-link-plus 👋

[![npm:version](https://img.shields.io/npm/v/gitbook-plugin-edit-link-plus.svg)](https://www.npmjs.com/package/gitbook-plugin-edit-link-plus)
[![npm:download](https://img.shields.io/npm/dt/gitbook-plugin-edit-link-plus.svg)](https://www.npmjs.com/package/gitbook-plugin-edit-link-plus)
[![npm:prerequisite](https://img.shields.io/badge/gitbook-*-blue.svg)](https://www.npmjs.com/package/gitbook-plugin-edit-link-plus)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/gitbook-plugin-edit-link-plus.svg)](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> Gitbook plugin add \"edit this page\" link, and intelligent recognition to Github or Gitlab source repository.

### 🏠 [Homepage](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus#readme)

- Github : [https://snowdreams1006.github.io/gitbook-plugin-edit-link-plus/](https://snowdreams1006.github.io/gitbook-plugin-edit-link-plus/)
- GitLab: [https://snowdreams1006.gitlab.io/gitbook-plugin-edit-link-plus/](https://snowdreams1006.gitlab.io/gitbook-plugin-edit-link-plus/)
- Gitee : [https://snowdreams1006.gitee.io/gitbook-plugin-edit-link-plus/](https://snowdreams1006.gitee.io/gitbook-plugin-edit-link-plus/)

## Screenshot

![edit-link-plus-use-preview.png](edit-link-plus-use-preview.png)

## Usage

### Step #1 - Update `book.json` file

1. In you gitbook's `book.json` file, add `edit-link-plus` to `plugins` list.
2. In `pluginsConfig`, Set `base` value which is base path to your github or gitlab or other code repo. Trailing slash is NOT required.
3. By default link label will be "Edit This Page". You can change it using plugin config `label`.

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": "Edit This Page"
        }
    }
}
```

Among them, the meanings of configuration parameters are as follows:

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

### Step #2 - gitbook commands

1. Run `gitbook install`. It will automatically install `edit-link-plus` gitbook plugin for your book. This is needed only once.

```bash
gitbook install
```

Or you can run `npm install gitbook-plugin-edit-link-plus` to install locally.

```bash
npm install gitbook-plugin-edit-link-plus
```

2. Build your book (`gitbook build`) or serve (`gitbook serve`) as usual.

```bash
$ gitbook serve
```

## Example

### Sample `book.json` file

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": "Edit This Page"
        }
    }
}
```

### Sample `book.json` file for Multi-source base

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": {
              "USER.github.io":"https://github.com/USER/REPO/edit/BRANCH/path/to/book",
              "USER.gitlab.io":"https://gitlab.com/USER/REPO/edit/BRANCH/path/to/book",
              "USER.gitee.io":"https://gitee.com/USER/REPO/edit/BRANCH/path/to/book",
              "CUSTOME DOMAIN":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master"
            },
            "label": "Edit This Page"
        }
    }
}
```

### Sample `book.json` file for multilingual labels

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": {
                "en": "Edit This Page",
                "de": "Seite bearbeiten"
            }
        }
    }
}
```

**Note**: Above snippet can be used as complete `book.json` file, if your book doesn't have one yet.

**Github/Gitlab**: In string `...REPO/edit/BRANCH...`, you may replace `edit` with `tree` if you want source file to open in read-mode, rather than edit-mode directly on github/gitlab.

- [docs](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/docs/book.json)

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": {
              "snowdreams1006.github.io":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master",
              "snowdreams1006.gitlab.io":"https://gitlab.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master",
              "snowdreams1006.gitee.io":"https://gitee.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master"
            },
            "defaultBase": "https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master",
            "label": "Edit This Page"
        }
    }
}
```

- [example](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master/example/book.json)

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/edit/master",
            "label": "Edit This Page"
        }
    }
}
```

## Author

👤 **snowdreams1006**

- Website: [snowdreams1006.tech](https://snowdreams1006.tech/)
- Github: [@snowdreams1006](https://github.com/snowdreams1006)
- Email: [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## 🤝 贡献

如果你想贡献自己的一份力量,欢迎提交 [`Issues`](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/issues) 或者 `Pull Request` 请求!

## 支持

如果本项目对你有所帮助,欢迎 ⭐️ [gitbook-plugin-edit-link-plus](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus) 项目,感谢你的支持与认可!

## 📝 版权

Copyright © 2019 [snowdreams1006](https://github.com/snowdreams1006).

This project is [MIT](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/LICENSE) licensed.





## Usage

### Step #1 - Update `book.json` file

1. In you gitbook's `book.json` file, add `edit-link` to `plugins` list.
2. In `pluginsConfig`, Set `base` value which is base path to your github or gitlab or other code repo. Trailing slash is NOT required.
3. By default link label will be "Edit This Page". You can change it using plugin config `label`.

- simple 

All website is same config:

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
            "label": "Edit This Page"
        }
    }
}
```

All website is same config with multipart language :

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": "https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
            "label": {
                "en": "Edit This Page",
                "zh": "编辑本页"
            }
        }
    }
}
```


## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/issues).

## Show your support

Give a **Star** if this project helped you!

## License

This project is [ISC](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master/LICENSE) licensed.

## Thanks

- [gitbook-plugin-editlink](https://github.com/zhaoda/gitbook-plugin-editlink)
- [gitbook-plugin-edit-link](https://github.com/rtCamp/gitbook-plugin-edit-link)

## Troubleshooting

1. If you are not seeing the "Edit this page" link, check if your `book.json` is valid. You can use this online tool - [http://json.parser.online.fr/beta/](http://json.parser.online.fr/beta/)
2. Check if you are using default gitbook theme. It is NOT recommended to modify gitbook themes directly.

## Known Issue

Gitbook 2.0.1 has removed `page:after` hook which this plugin needs. An issue has been reported here - https://github.com/GitbookIO/gitbook/issues/724 but meanwhile this plugin is using workaround added by this pull request - https://github.com/rtCamp/gitbook-plugin-edit-link/pull/4

So when using Gitbook 2.0.1, you may see following warning in console at the time of running build:

> warn: hook 'page' used by plugin 'gitbook-plugin-edit-link' is deprecated, and will be remove in the coming versions

You can safely ignore above warning for now.

## How this work?

This plugin simply looks for HTML comment `<!-- Actions Right -->` in parsed page content and insert "edit link" HTML just before `<!-- Actions Right -->`.

This means if that HTML comment changes, this plugin will break but I hope to fix it easily whenever that happen.