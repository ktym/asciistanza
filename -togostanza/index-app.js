import { d as defineComponent, s as script$1, o as openBlock, c as createBlock, r as resolveComponent, w as withCtx, F as Fragment, a as renderList, b as createVNode, t as toDisplayString, e as createCommentVNode, f as createApp } from './Layout-377f20c0.js';

var script = defineComponent({
  components: {
    Layout: script$1
  },

  props: ['allMetadata'],

  setup(props) {
    return props;
  }
});

const _hoisted_1 = /*#__PURE__*/createVNode("h1", { class: "display-4" }, "List of Stanzas", -1 /* HOISTED */);
const _hoisted_2 = {
  key: 0,
  class: "list-group mt-3"
};
const _hoisted_3 = {
  key: 0,
  class: "small text-muted text-truncate mt-1 mb-0"
};
const _hoisted_4 = { key: 1 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");

  return (openBlock(), createBlock(_component_Layout, null, {
    default: withCtx(() => [
      _hoisted_1,
      (_ctx.allMetadata.length > 0)
        ? (openBlock(), createBlock("div", _hoisted_2, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.allMetadata, (metadata) => {
              return (openBlock(), createBlock("a", {
                key: metadata['@id'],
                href: `./${metadata['@id']}.html`,
                class: "list-group-item list-group-item-action py-3"
              }, [
                createVNode("div", null, toDisplayString(metadata['stanza:label']), 1 /* TEXT */),
                (metadata['stanza:definition'])
                  ? (openBlock(), createBlock("p", _hoisted_3, toDisplayString(metadata['stanza:definition']), 1 /* TEXT */))
                  : createCommentVNode("v-if", true)
              ], 8 /* PROPS */, ["href"]))
            }), 128 /* KEYED_FRAGMENT */))
          ]))
        : (openBlock(), createBlock("p", _hoisted_4, "No stanzas defined."))
    ]),
    _: 1 /* STABLE */
  }))
}

script.render = render;
script.__file = "node_modules/togostanza/src/components/Index.vue";

var allMetadata = [{"@context":{"stanza":"http://togostanza.org/resource/stanza#"},"@id":"barchart","stanza:label":"Barchart","stanza:definition":"ASCII Barchart","stanza:type":"Stanza","stanza:display":"Text","stanza:provider":"DBCLS","stanza:license":"MIT","stanza:author":"Toshiaki Katayama","stanza:address":"ktym@dbcls.jp","stanza:contributor":[],"stanza:created":"2021-04-26","stanza:updated":"2021-04-26","stanza:parameter":[{"stanza:key":"data-url","stanza:example":"https://sparql-support.dbcls.jp/sparqlist/api/metastanza_multi_data_chart","stanza:description":"Data source URL","stanza:required":true},{"stanza:key":"data-type","stanza:type":"single-choice","stanza:choice":["json","tsv","csv","sparql-results-json"],"stanza:example":"json","stanza:description":"Data type","stanza:required":true},{"stanza:key":"category","stanza:example":"chromosome","stanza:description":"Variable to be assigned as a category","stanza:required":true},{"stanza:key":"value","stanza:example":"count","stanza:description":"Variable to be assigned as a value","stanza:required":true},{"stanza:key":"group-by","stanza:example":"category","stanza:description":"Variable to be assigned as a group","stanza:required":false},{"stanza:key":"max-label-length","stanza:example":10,"stanza:description":"Maximum label length of the category name","stanza:required":false},{"stanza:key":"max-bar-length","stanza:example":50,"stanza:description":"Maximum bar length in the number of letters","stanza:required":false}],"stanza:menu-placement":"bottom-right","stanza:style":[{"stanza:key":"--togostanza-font-size","stanza:type":"text","stanza:default":"12px","stanza:description":"Font size"},{"stanza:key":"--togostanza-line-height","stanza:type":"number","stanza:default":1,"stanza:description":"Line height"},{"stanza:key":"--togostanza-font-color","stanza:type":"color","stanza:default":"#333333","stanza:description":"Font color"},{"stanza:key":"--togostanza-background-color","stanza:type":"color","stanza:default":"rgba(255,255,255,0)","stanza:description":"Background color"}],"stanza:incomingEvent":[],"stanza:outgoingEvent":[]}];

createApp(script, {allMetadata}).mount('body');
//# sourceMappingURL=index-app.js.map
