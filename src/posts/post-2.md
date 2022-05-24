---
slug: "/blog/console-logging-objects-gotcha"
date: "2022-05-24"
title: "A little console.log behavior that might trip you up."
---

## Pop Quiz Hotshot!

Say you had an array of objects

```javascript
const myData = [
    {
        id: 1,
        value: 'first'
    },
    {
        id: 2,
        value: 'middle'
    },
    {
        id: 3,
        value: 'last'
    }
]
```

And a function to sort that data. 
```javascript
function shuffleData(){
    myData.sort(() => Math.random() - 0.5);
    //BTW this is a bad way to shuffle things. Check this out for something better
    //https://stackoverflow.com/a/2450976/2070478
}
```

If you logged this data using console.log like this, what would you expect to see?
```javascript
console.log(myData);
shuffleData();
console.log(myData);
```


You'd probably expect the first unshuffled array, followed by a shuffled array. Something like this. 
```powershell
(3) [{…}, {…}, {…}]
0: {id: 1, value: 'first'}
1: {id: 2, value: 'middle'}
2: {id: 3, value: 'last'}
length: 3
[[Prototype]]: Array(0)
preview-b12342b8ff71a.js:2 
(3) [{…}, {…}, {…}]
0: {id: 3, value: 'last'}
1: {id: 2, value: 'middle'}
2: {id: 1, value: 'first'}
length: 3
[[Prototype]]: Array(0)
```

But you don't. Instead what you get is 
```powershell
(3) [{…}, {…}, {…}]
0: {id: 3, value: 'last'}
1: {id: 2, value: 'middle'}
2: {id: 1, value: 'first'}
length: 3
[[Prototype]]: Array(0)
preview-b12342b8ff71a.js:2 
(3) [{…}, {…}, {…}]
0: {id: 3, value: 'last'}
1: {id: 2, value: 'middle'}
2: {id: 1, value: 'first'}
length: 3
[[Prototype]]: Array(0)
```

But how can this be? Our console log ran before our shuffle function? And here is the rub. The latest versions of Firefox and Chrome (What I assume 99% of you develop on) will log javascript objects to the console as [reference to the object](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) and not the value of the object at the moment in time you call the log. 

Why is this? I honestly have zero clue. I'd bet there is a good reason or at least made sense at the time, but that's beyond the scope of this post. In the mean time, if you need console.log functionality to work in a more intuitive way for objects, [check out this post.](https://stackoverflow.com/a/48969647/2070478)

Wrap your object value like this. 

```javascript
console.log(JSON.parse(JSON.stringify(object)));
```