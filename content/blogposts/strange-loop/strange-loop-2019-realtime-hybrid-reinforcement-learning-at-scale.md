---
title: "Strange Loop 2019 - Realtime Hybrid Reinforcement Learning at Scale"
description: "Next best action (NBA) is a technique that takes unique user history and characteristics into consideration and recommends the next actions that help the customer progressing towards business goals as quickly and smoothly as possible. It is not easy to design such a AI powered NBA engine. Ideally a hand-free NBA engine needs to handle the following problems. a) It should deal with incomplete historical feedback that are skewed towards a small set of actions; b) It should adapt to dynamic actions, which can be added or removed frequently due to seasonal changes or shifts in business strategies; c) It needs to optimize for multiple complex business objectives, which usually consist of reaching a set of target events or moving users to next more preferred stage; d) Most importantly, it has to learn and make decisions in realtime and at massive scale. Most of the solutions in the market only addresses a few of those challenges, due to model or technical challenges. In this presentation, we will show how we address all those issues at Salesforce Marketing Cloud Einstein. We will present a hybrid model based on reinforcement learning that balances both online and offline learning. We will show how we utilize distributed big data processing technologies and services to train and make predictions at massive scale. We will also discuss an offline evaluation mechanism to provide bounded expected performance, which has been a hard problem for reinforcement machine learning in general."
authors:
  - name: Blogy McBlogerson
    url: https://heresblogy.com/
publishDate: 2019-09-14T00:00-14:30
tags: [
  strange-loop
]
slug: strange-loop-2019-realtime-hybrid-reinforcement-learning-at-scale
heroImage: https://about.sourcegraph.com/blog/strange-loop-thumbnail-square-v2.jpg
published: false
---

<div className="container p-0 liveblog-presenters d-flex w-100 text-center">
  <div className="row m-0 w-100">
      <p className=" mr-6 m-0">
        <span className="liveblog-presenters__name">Kexin Xie</span>
        <a href="https://twitter.com/realstraw" target="_blank" title="Twitter"><i className="fa fa-twitter pr-2"></i></a>
        <a href="https://github.com/realstraw" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  <p className=" mr-6 m-0">
        <span className="liveblog-presenters__name">Yuxi Zhang</span>
        <a href="https://github.com/juziyt" target="_blank" title="GitHub"><i className="fa fa-github pr-2"></i></a>
      </p>
  </div>
</div>

---

## Overview

Next best action (NBA) is a technique that takes unique user history and characteristics into consideration and recommends the next actions that help the customer progressing towards business goals as quickly and smoothly as possible. It is not easy to design such a AI powered NBA engine. Ideally a hand-free NBA engine needs to handle the following problems. a) It should deal with incomplete historical feedback that are skewed towards a small set of actions; b) It should adapt to dynamic actions, which can be added or removed frequently due to seasonal changes or shifts in business strategies; c) It needs to optimize for multiple complex business objectives, which usually consist of reaching a set of target events or moving users to next more preferred stage; d) Most importantly, it has to learn and make decisions in realtime and at massive scale. Most of the solutions in the market only addresses a few of those challenges, due to model or technical challenges. In this presentation, we will show how we address all those issues at Salesforce Marketing Cloud Einstein. We will present a hybrid model based on reinforcement learning that balances both online and offline learning. We will show how we utilize distributed big data processing technologies and services to train and make predictions at massive scale. We will also discuss an offline evaluation mechanism to provide bounded expected performance, which has been a hard problem for reinforcement machine learning in general.

---

AWESOME LIVEBLOG CONTENT HERE!
