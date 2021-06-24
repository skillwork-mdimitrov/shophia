A component allowing the display of clothes in a card styled manner. Each card has an Add To Cart button and an option to add a discount to the item.

#### Technical details
The Summer Collection component works with <em>.svg</em> images imported as a <i>ReactComponent</i>
and passed to the factory functions. The second argument of the discounted factory fn accepts a number,
which will spawn a circle with the desired discount.

```js
<SummerCollection />
```