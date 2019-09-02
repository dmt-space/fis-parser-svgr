fis-parser-svgr
============================

## 安装与使用 

全局安装

```bash
npm install fis-parser-svg -g
```


## 配置

```js
fis.match('/src/icons/**.svg', {
    rExt: '.js',
    isJsXLike: true,
    isJsLike: true,
    isMod: true,
    parser: [
        fis.plugin('svgr'),
        fis.plugin('typescript', { // 把 jsx => js ，你可能会换成 babel 
            importHelpers: true,
            esModuleInterop: true,
            experimentalDecorators: true,
            sourceMap: false
        })
    ]
})
```


