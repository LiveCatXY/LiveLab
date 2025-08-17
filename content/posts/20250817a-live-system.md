---
title: 🤖生机系统LiveSystem
description: 系统化的数据流架构
publishDate: 2025-08-17
tags: [💻IT]
level: 3
top: 5
---

## 一、MVC 架构及其衍生

MVC 架构及其衍生架构如 MVP、MVVM，主要是用来解耦 Model 和 View 层，中间的 Controller 及其变体 Presenter 和 View Model，都是对 View 和 Model 的各种方式的协调。

一个主要的解耦理由是 Model 和 View 分别对应数据逻辑（如存储、分析、传输等）和显示逻辑，可以独立对数据逻辑和显示逻辑进行开发、测试、维护等。

参考：[MVC（Model-View-Controller）架构详解](/posts/20250817c-mvc)、[MVP（Model-View-Presenter）架构详解](/posts/20250817d-mvp)、[MVVM（Model-View-ViewModel）架构详解](/posts/20250817e-mvvm)。

## 二、ECS 架构

对于更复杂的程序，比如游戏，MVC 架构解耦数据逻辑和显示逻辑还不够，还得解耦各种复杂的游戏逻辑，并且保持高效率和清晰灵活易维护。

参考：[ECS架构(Entity-Component-System)](/posts/20250817b-ecs)。

## 三、数据流

MVC 和 ECS 都是以数据为核心关注点。

而数据在变化时，就成了数据流。数据的关联，也让数据流在空间维度上扩展开来。

数据的背后，则是状态、内容、资源等更实体的因素。

以数据流为核心关注点的架构，可以更好地分析需求、设计架构、实现程序。

## 四、系统化

数据和数据流都是关联的，有些紧密，有些则较松弛。

通过系统化、综合化建模这些关联，可以让软件更安全可靠、清晰高效。

总之，通过系统化的数据流架构，可以构建高可用的软件。

## 五、生机系统

如果传统读写数据模式叫图书馆模式的话，数据流驱动模式可以叫生态圈模式。因为数据是活的，数据的关联者也是活的，所以可以叫 LiveSystem。

有个项目叫[Darklang](https://darklang.com/)，通过用代码系统化地统一软件生命周期所有的活动，让开发更轻松。

我也可以模仿它，让软件开发以充满生机的流变关联数据为核心关注点，更直接、更统一、更可扩展。所以也可以叫 DataDUX（Direct、Universal、Extendable）。
