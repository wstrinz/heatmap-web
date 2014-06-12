// Compiled by ClojureScript 0.0-2202
goog.provide('heatmap_web.main');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.events');
goog.require('ajax.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('domina.events');
goog.require('domina');
goog.require('ajax.core');
heatmap_web.main.render_message = (function render_message(message){var user = cljs.core.get.call(null,message,"user");var text = cljs.core.get.call(null,message,"message");return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),user], null),text," - ",user], null)], null);
});
heatmap_web.main.render_messages = (function render_messages(messages){var messages_div = domina.by_id.call(null,"messages");domina.destroy_children_BANG_.call(null,messages_div);
return domina.append_BANG_.call(null,messages_div,dommy.template.node.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977)], null),cljs.core.map.call(null,heatmap_web.main.render_message,messages))));
});
heatmap_web.main.add_message = (function add_message(_){return ajax.core.POST.call(null,"/add-message",cljs.core.merge.call(null,heatmap_web.main.base_request_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",1968829305),domina.value.call(null,domina.by_id.call(null,"message")),new cljs.core.Keyword(null,"user","user",1017503549),domina.value.call(null,domina.by_id.call(null,"user"))], null),new cljs.core.Keyword(null,"handler","handler",1706707644),heatmap_web.main.render_messages], null)));
});
heatmap_web.main.init = (function init(){console.log(L);
var osm_url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";var osm_attrib = "Map data \u00A9 OpenStreetMap contributors";var G__5484 = (new L.Map("the-map"));G__5484.setView((new L.LatLng(0,0)),1);
G__5484.addLayer((new L.TileLayer(osm_url,{"attribution": osm_attrib, "maxZoom": 19, "minZoom": 1})));
return G__5484;
});
goog.exportSymbol('heatmap_web.main.init', heatmap_web.main.init);

//# sourceMappingURL=main.js.map