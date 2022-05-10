---
slug: "/blog/fresh-project"
date: "2022-05-09"
title: "Restarting my personal blog with a fresh project"
---

## Well 2020 was... something

<p>
  It's been almost 2 years since I've updated this website. 2 years of dealing with a pandemic. 2 years of failing to rank up Valorant. Almost 730 days of trying to keep my center of gravity. But largely, things have gone 
  well for me and I'm going to give personal creation a shot again. 
</p>
<p>
I started with my personal website. Here's a list of things I've updated:
</p>
<ul>
  <li>Light/Dark Mode with GSAP and local storage</li>
  <li>Page transition animations with Frame Motion</li>
  <li>PrismJS integration for code samples</li>
</ul>

```javascript
//Code examples look like this now!
const hanoi = (n, source, spare, target) => {
  if(n > 0){
    hanoi(n - 1, source, target, spare)
    move(source, target)
    hanoi(n - 1, spare, source, target)
  }
}
```

I'm going to try to keep this website updated this time. 2 tools that I love are [Greensock](https://greensock.com/) and [Codepen](https://codepen.io/your-work) so I'll probably start with writing tips/tricks that I've picked up.

I'm also interested in playing with [Threejs](https://threejs.org/) again so maybe I'll spend some more time playing around with that. 