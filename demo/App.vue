<template>
  <div class="max-w-screen-xl m-auto px-2">
    <h1 class="text-xl mt-10">EXAMPLE</h1>
    <h1 class="text-xl mt-10">Javascript</h1>
    <pre>
      <code v-highlight class="javascript">
function say(text) {
  alert(text)
}

say('Hello')
      </code>
    </pre>

    <h1 class="text-xl">HTML</h1>
    <pre>
      <code v-highlight class="html">
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
  name: "App",
  mounted() {
    escapeHTML;
  }
};
</script>
