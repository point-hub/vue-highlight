import highlightjs from "highlight.js/lib/core";
import { nextTick } from "vue";

const plugin = {
  install: function(Vue) {
    Vue.directive("highlight", {
      mounted(el) {
        nextTick(function() {
          el.innerHTML = escapeHTML(el);
          highlightjs.highlightBlock(el);
        });
      }
    });
  }
};

function escapeHTML(el) {
  return el.innerHTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default {
  plugin,
  registerLanguage: highlightjs.registerLanguage
};
