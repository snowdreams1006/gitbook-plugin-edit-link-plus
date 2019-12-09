
### 🏠 [Homepage](https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus#readme)

## Screenshot

![gitbook-plugin-edit-link](https://cloud.githubusercontent.com/assets/4115/5695161/f5b79002-99b8-11e4-821a-d2af6c729348.png)

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

- advance

auto jump to source site according to pre-configuration

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": {
              "snowdreams1006.github.io":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "snowdreams1006.gitlab.io":"https://gitlab.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "snowdreams1006.gitee.io":"https://gitee.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "snowdreams1006.cn":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "www.snowdreams1006.cn":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "snowdreams1006.tech":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "www.snowdreams1006.tech":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master"
            },
            "label": "Edit This Page"
        }
    }
}
```

auto jump to source site according to pre-configuration with multiple language

```json
{
    "plugins": ["edit-link-plus"],
    "pluginsConfig": {
        "edit-link-plus": {
            "base": {
              "snowdreams1006.github.io":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "snowdreams1006.gitlab.io":"https://gitlab.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "snowdreams1006.gitee.io":"https://gitee.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "snowdreams1006.cn":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "www.snowdreams1006.cn":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "snowdreams1006.tech":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master",
              "www.snowdreams1006.tech":"https://github.com/snowdreams1006/gitbook-plugin-edit-link-plus/blob/master"
            },
            "label": {
                "en": "Edit This Page",
                "zh": "编辑本页"
            }
        }
    }
}
```

#### Sample `book.json` file for gitbook version 2.0.1 and above

```json
{
    "gitbook": "2.0.1",
    "plugins": ["edit-link"],
    "pluginsConfig": {
        "edit-link": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": "Edit This Page"
        }
    }
}
```

#### Sample `book.json` file for gitbook version 2.0.1+ and multilingual labels

```json
{
    "gitbook": "2.0.1",
    "plugins": ["edit-link"],
    "pluginsConfig": {
        "edit-link": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": {
                "en": "Edit This Page",
                "de": "Seite bearbeiten"
            }
        }
    }
}
```

#### Sample `book.json` file for older gitbook versions <= 1.5.0

```json
{
    "gitbook": "1.5.0",
    "plugins": ["edit-link@1.1.0"],
    "pluginsConfig": {
        "edit-link": {
            "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
            "label": "Edit This Page"
        }
    }
}
```

**Note**: Above snippet can be used as complete `book.json` file, if your book doesn't have one yet.

**Github/Gitlab**: In string `...REPO/edit/BRANCH...`, you may replace `edit` with `tree` if you want source file to open in read-mode, rather than edit-mode directly on github/gitlab.

### Step #2 - gitbook commands

1. Run `gitbook install`. It will automatically install `edit-link` gitbook plugin for your book. This is needed only once.
2. Build your book (`gitbook build`) or serve (`gitbook serve`) as usual.

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Author

* Website: https://snowdreams1006.github.io/
* Github: [@snowdreams1006](https://github.com/snowdreams1006)

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