---
title: 对 React 的思考
publishDate: 2025-05-29
tags: [💻IT]
level: 2
---

这几天看了下 React 的啰嗦新文档，看得神经衰落_(:з」∠)_。

总体来看，就是讲明白 React 是数据流驱动的UI库。相比而言，Vue的依赖收集与响应，就像有人说的，弹珠游戏式驱动。

React 还是有点像游戏 UI 更新的，都是数据驱动。游戏UI的一个典型特点，就是有个每秒60帧刷新的事件循环函数♻️，在这个函数里，完全去除旧UI，然后根据数据来重建新UI。

React 把复杂的 UI 分化为静态为主的样式等，以及动态的状态数据，然后将更新降维成对状态数据的更新，再利用数据流驱动同步到复杂的真实 UI，确实也算是一种对 UI 复杂性的很好的处理方法。

大体上，React 是生成式 UI，Vue 是保留式 UI。

其实，React 更进一步就是游戏 UI 了，也就是即时 UI，完全分离状态数据与 UI，就像[ImGui](https://github.com/ocornut/imgui)一样。

ImGui 文档里的一句话很有启发：

> Give someone state and they'll have a bug one day, but teach them how to represent state in two separate locations that have to be kept in sync and they'll have bugs for a lifetime.

另外，可参考：

1. [React 和 IMGUI 有何联系和区别？](https://www.zhihu.com/question/39093254)
2. [如何评价 imgui？](https://www.zhihu.com/question/267602287/answer/1906456494351849226)
