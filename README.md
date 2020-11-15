# @point-hub/vue-highlight

Vue 3 directive for highlight.js

## Installation
```
yarn add @point-hub/vue-highlight

or

npm install @point-hub/vue-highlight --save
```

## Usage
Import plugin in your main.js file
```
import Highlight from "@point-hub/vue-highlight";
import "highlight.js/styles/atom-one-dark.css";

// Import Languages
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";

// Register Language
Highlight.registerLanguage("html", html);
Highlight.registerLanguage("javascript", javascript);

const app = createApp(App);
app.use(Highlight.plugin);
app.mount("#app");
```

And use it into your view
```
<pre>
  <code v-highlight class="javascript">
function say(text) {
alert(text)
}

say('Hello')
  </code>
</pre>
```