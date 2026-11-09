# ⚡ TJ Electro

[English](README.md)

仓库文档维护英文和简体中文版。英文文件是唯一权威来源。中文译文使用 `_zh` 后缀，并在同一次改动中更新。

### 常驻 Almere，可用英语和中文沟通的电工

---

## 关于 TJ Electro

欢迎来到 **TJ Electro**。

我为住宅项目提供可靠、整洁、专业的电气服务。我能用**英语和中文**沟通，方便把需求说清楚。

---

## 服务

- 安装照明设备（吸顶灯、吊灯、LED 灯具）
- 安装或更换插座和开关
- 电气故障排查与诊断
- 升级或更换配电箱
- 新增电路和回路
- 安装电动车充电桩
- 家庭电池和储能系统
- 智能家居与自动化系统
- 安防系统（摄像头、基础报警设备）
- 小型翻修及电气升级
- 其他电气工作，欢迎咨询

---

## 服务特点

- 英语和中文沟通清楚
- 收费透明
- 施工整洁、细致
- 优先保证施工质量

---

## 添加项目案例

案例图片放在 `assets/images/portfolio/`，项目描述和翻译写在 `_data/portfolio.yml`。网站按 YAML 列表的顺序展示已发布的案例。

### JPG 图片处理流程

网站可以直接显示 JPG 文件，但相机原图往往较大，也可能包含 GPS 或 EXIF 元数据。用仓库里的脚本缩放图片、移除元数据，并生成 WebP 文件。

```sh
./scripts/prepare-portfolio-image.sh "/path/to/IMG_1234.JPG" distribution-board-01
```

生成的文件路径为 `assets/images/portfolio/distribution-board-01.webp`。

脚本需要 ImageMagick。在 macOS 上可用以下命令安装。

```sh
brew install imagemagick
```

如果保留 JPG 格式，把图片放入 `assets/images/portfolio/`，并在 YAML 中填写 `.jpg` 路径。发布前缩小大尺寸原图并移除位置元数据。

### 案例条目

参考 `_data/portfolio.yml` 中的示例条目，将新条目按希望展示的顺序添加到列表中。准备期间保持 `published: false`，等图片和三种语言的标题、描述及替代文本都就绪后再改为 `true`。如果某种语言缺少整组案例翻译，卡片会显示英文。

```yaml
- id: "distribution-board-01"
  published: true
  image: "/assets/images/portfolio/distribution-board-01.webp"
  location: "Almere"
  date: "2026-08"
  text:
    en:
      title: "Distribution board upgrade"
      description: "Replacement and rewiring of an outdated distribution board."
      alt: "Completed residential distribution board upgrade"
    zh:
      title: "配电箱升级"
      description: "更换老旧配电箱并重新接线。"
      alt: "升级完成的住宅配电箱"
    nl:
      title: "Groepenkast vernieuwd"
      description: "Een verouderde groepenkast vervangen en opnieuw bedraad."
      alt: "Vernieuwde groepenkast in een woning"
```

---

## 网站翻译

网站提供英文（`/`）、简体中文（`/zh/`）和荷兰语（`/nl/`）。每种语言都有首页、案例页和联系页。语言切换器通过 `_data/routes.yml` 链接到当前页面的其他语言版本。

每次修改网站时同步维护三种语言。共享文案在 `_data/i18n/en.yml`、`_data/i18n/zh.yml` 和 `_data/i18n/nl.yml` 中更新，使用相同的键。页面标题和描述在对应的页面入口更新。案例翻译统一放在 `_data/portfolio.yml`。发布前检查三个语言版本及其语言切换链接。

---

## 联系方式

📧 邮箱 `info@studiotj.cc`

如方便，请附上现场照片或视频，以便更快估价。

---

## 服务条款

- 报价基于收到的信息，最终价格可能随现场条件而调整。
- 小型工程可能按小时收费。
- 除非另有说明，材料费用另计。
- 安装保修期为 **12 个月**。
- 产品保修按制造商的规定执行。
- 如果没有开展施工，仍可能收取上门或检查费用。

---

## 注册信息

- 商号 **TJ Electro**
- 荷兰商会注册号（KvK）80477917

---

*© 2026 TJ Electro。保留所有权利。*
