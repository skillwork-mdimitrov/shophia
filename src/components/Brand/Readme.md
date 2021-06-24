A React Bootstrap responsive component that generates a row of centered brand logos scaling to all device screen sizes. 

#### Technical details
BrandSection component works with <em>.svg</em> images imported as a <i>ReactComponent</i> and passed to the factory function.
The logo images are spawned in a typical Bootstrap setting (container + row) and are centered within both horizontally and vertically.<br>
The Bootstrap Grid system is used to control how many will fit the row, based on the device screen size.

```js
<BrandSection/>
```