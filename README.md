# ARCANA

[开始抽牌](https://gimlet7.github.io/arcana/)

暗紫与古金的极简塔罗体验：78 张原创牌面、六种牌阵、木桌与悬浮扇牌、金尘消散、正逆位解读，以及浏览器实时合成的氛围音。

## 使用

选择张数，开始，轻触牌堆。从展开的牌中点选，落牌后悬停查看牌名、点击查看牌意。

支持鼠标、触屏、方向键与 Enter。右上角可切换氛围音与舒缓动效。

## 运行

直接打开 `index.html`，或将全部文件放到静态网站托管服务。运行时无需后端、密钥或远程素材。

## 实现

原生 JavaScript、Canvas 2D、Three.js r170、Web Audio API。牌面、木纹和声音均由程序生成。78 张牌采用设备上的加密随机源洗牌，独立随机正逆位。

`node check.cjs` 可检查牌组、牌意、牌阵与不重复洗牌。

Three.js 的 MIT 许可证见 `LICENSE.txt`。

## 牌意参考

中文牌意为基于象征传统编写的反思性解读。二张与五张为原创牌阵；三张、七张、十张采用常见牌阵及变体。

- [A. E. Waite · The Pictorial Key to the Tarot](https://sacred-texts.com/book/the-pictorial-key-to-the-tarot)
- [Simply Tarot · Past, Present and Future Spread](https://www.simplytarot.com/pages/9-card-past-present-and-future-tarot-spread)
- [Llewellyn · The Horseshoe Spread](https://www.llewellyn.com/journal/print.php?id=1960)
