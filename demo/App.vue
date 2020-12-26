<template>
  <div class="max-w-screen-xl px-2 m-auto">
    <h1 class="mt-10 text-xl">EXAMPLE</h1>
    <h1 class="mt-10 text-xl">Javascript</h1>
    <pre>
      <code v-highlight class="javascript">
function say(text) {
  alert(text)
}

say('Hello')
      </code>
    </pre>

    <h1 class="text-xl">MUSTACHE</h1>
    <pre>
      <code v-highlight class="html">
        {{ text }}
      </code>
    </pre>

    <h1 class="text-xl">HTML</h1>
    <pre>
      <code v-highlight class="html" id="html">
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    
  </body>
</html>
      </code>
    </pre>
  </div>
</template>

<script>
import { escapeHTML } from "../src/highlight";
export default {
  data() {
    return {
      text: `
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    Hello World
  </body>
</html>`
    };
  },
  created() {
    setTimeout(() => {
      this.text = `
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    Updated
  </body>
</html>`;
    }, 1000);
  },
  mounted() {
    document.getElementById("html").innerHTML = escapeHTML(
      document.getElementById("html").innerHTML
    );
  }
};
</script>
