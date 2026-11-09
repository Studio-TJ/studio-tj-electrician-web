# AGENTS.md 中文版

[English](AGENTS.md)

## 仓库文档

- 仓库文档维护英文和简体中文版。英文文件是唯一权威来源。先更新英文，再在同一次改动中同步中文译文。
- 中文译文在扩展名前加 `_zh`，例如 `AGENTS_zh.md` 和 `README_zh.md`。两个版本有差异时，以英文为准。
- 公开网站有三种语言。每次修改网站时，同步维护英文、简体中文和荷兰语。

## 项目概况

TJ Electro 是一家常驻 Almere 的住宅电工公司。本站使用 Jekyll、Liquid、SCSS 和原生 JavaScript，按 GitHub Pages 配置构建，域名为 `electro.studiotj.cc`。修改时优先复用现有模板、样式和数据文件。

## 从哪里改

- `index.html`、`portfolio.html`、`contact.html` 是英文入口，`zh/` 和 `nl/` 下分别是对应的中文和荷兰语入口。三个语言版本共用 `_layouts/default.html` 和 `_includes/pages/` 中的模板。
- `_data/i18n/en.yml`、`_data/i18n/zh.yml` 和 `_data/i18n/nl.yml` 保存网站文案，包括服务、资质、收费和条款。`_data/contact.yml` 保存公开联系方式，`_data/portfolio.yml` 保存项目案例及其翻译。
- `_data/routes.yml` 维护各页面的语言切换路由。全站样式在 `assets/css/style.scss`，微信弹窗和复制按钮的行为在 `assets/js/contact.js`。

## 网站修改约定

- 同一次改动中更新三种语言的客户文案和页面元数据，新增文案键放在三个语言文件的同一层级。改动路由时检查三种语言的页面入口、导航、语言切换和 `hreflang`。
- 收费、服务范围、资质、保修条款和联系方式以业主提供的资料为准。核对各语言的金额、单位和适用条件。
- 案例按 `_data/portfolio.yml` 中的顺序展示。准备中的案例使用 `published: false`。发布前确认图片存在，并提供三种语言的标题、描述和替代文本。缺少某种语言的整组案例翻译时，模板会回退到英文。
- 参考[案例图片处理流程](README_zh.md#jpg-图片处理流程)，优先用 `./scripts/prepare-portfolio-image.sh /path/to/photo.jpg project-id`。脚本用 ImageMagick 缩放照片、移除元数据并转为 WebP。发布前检查照片中是否有门牌、姓名等可识别信息。

## 验证

- 在已安装 Jekyll 和 `jekyll-remote-theme` 的环境中，从仓库根目录运行 `jekyll build`。需要浏览器预览时运行 `jekyll serve`。构建输出 `_site/` 不提交到 Git。
- 检查受影响的英文、中文和荷兰语页面，包括手机宽度下的显示。涉及案例时检查图片和替代文本，涉及联系页时检查联系方式链接及微信弹窗的打开、关闭和复制功能。
