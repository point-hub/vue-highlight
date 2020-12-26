import highlightjs from "highlight.js/lib/core";
import { nextTick } from "vue";

const plugin = {
  install: function(Vue) {
    Vue.directive("highlight", {
      mounted(el) {
        nextTick(function() {
          highlightjs.highlightBlock(el);
        });
      },
      updated(el) {
        nextTick(function() {
          highlightjs.highlightBlock(el);
        });
      }
    });
  }
};

export function escapeHTML(el) {
  return el
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
