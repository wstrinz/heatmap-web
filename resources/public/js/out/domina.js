// Compiled by ClojureScript 0.0-2202
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_7171 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_7172 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_7173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",2558708147),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_7173,opt_wrapper_7171,table_section_wrapper_7172,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),opt_wrapper_7171,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),table_section_wrapper_7172,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_7172,cell_wrapper_7173,table_section_wrapper_7172,table_section_wrapper_7172]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3445__auto__ = div.firstChild;if(cljs.core.truth_(and__3445__auto__))
{return div.firstChild.childNodes;
} else
{return and__3445__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__7178 = cljs.core.seq.call(null,tbody);var chunk__7179 = null;var count__7180 = 0;var i__7181 = 0;while(true){
if((i__7181 < count__7180))
{var child = cljs.core._nth.call(null,chunk__7179,i__7181);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7182 = seq__7178;
var G__7183 = chunk__7179;
var G__7184 = count__7180;
var G__7185 = (i__7181 + 1);
seq__7178 = G__7182;
chunk__7179 = G__7183;
count__7180 = G__7184;
i__7181 = G__7185;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7178);if(temp__4126__auto__)
{var seq__7178__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7178__$1))
{var c__4205__auto__ = cljs.core.chunk_first.call(null,seq__7178__$1);{
var G__7186 = cljs.core.chunk_rest.call(null,seq__7178__$1);
var G__7187 = c__4205__auto__;
var G__7188 = cljs.core.count.call(null,c__4205__auto__);
var G__7189 = 0;
seq__7178 = G__7186;
chunk__7179 = G__7187;
count__7180 = G__7188;
i__7181 = G__7189;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__7178__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__7190 = cljs.core.next.call(null,seq__7178__$1);
var G__7191 = null;
var G__7192 = 0;
var G__7193 = 0;
seq__7178 = G__7190;
chunk__7179 = G__7191;
count__7180 = G__7192;
i__7181 = G__7193;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__7195 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__7195,0,null);var start_wrap = cljs.core.nth.call(null,vec__7195,1,null);var end_wrap = cljs.core.nth.call(null,vec__7195,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__7196 = wrapper.lastChild;
var G__7197 = (level - 1);
wrapper = G__7196;
level = G__7197;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3445__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3445__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3445__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj7199 = {};return obj7199;
})();
domina.nodes = (function nodes(content){if((function (){var and__3445__auto__ = content;if(and__3445__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3445__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4084__auto__ = (((content == null))?null:content);return (function (){var or__3457__auto__ = (domina.nodes[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.nodes["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3445__auto__ = nodeseq;if(and__3445__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3445__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4084__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3457__auto__ = (domina.single_node[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (domina.single_node["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3445__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3445__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3445__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__7200){
var mesg = cljs.core.seq(arglist__7200);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__7201){
var mesg = cljs.core.seq(arglist__7201);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__7202){
var contents = cljs.core.seq(arglist__7202);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__7203_SHARP_){return p1__7203_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__7204_SHARP_,p2__7205_SHARP_){return goog.dom.insertChildAt(p1__7204_SHARP_,p2__7205_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7207_SHARP_,p2__7206_SHARP_){return goog.dom.insertSiblingBefore(p2__7206_SHARP_,p1__7207_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__7209_SHARP_,p2__7208_SHARP_){return goog.dom.insertSiblingAfter(p2__7208_SHARP_,p1__7209_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__7211_SHARP_,p2__7210_SHARP_){return goog.dom.replaceNode(p2__7210_SHARP_,p1__7211_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__7216_7220 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7217_7221 = null;var count__7218_7222 = 0;var i__7219_7223 = 0;while(true){
if((i__7219_7223 < count__7218_7222))
{var n_7224 = cljs.core._nth.call(null,chunk__7217_7221,i__7219_7223);goog.style.setStyle(n_7224,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7225 = seq__7216_7220;
var G__7226 = chunk__7217_7221;
var G__7227 = count__7218_7222;
var G__7228 = (i__7219_7223 + 1);
seq__7216_7220 = G__7225;
chunk__7217_7221 = G__7226;
count__7218_7222 = G__7227;
i__7219_7223 = G__7228;
continue;
}
} else
{var temp__4126__auto___7229 = cljs.core.seq.call(null,seq__7216_7220);if(temp__4126__auto___7229)
{var seq__7216_7230__$1 = temp__4126__auto___7229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7216_7230__$1))
{var c__4205__auto___7231 = cljs.core.chunk_first.call(null,seq__7216_7230__$1);{
var G__7232 = cljs.core.chunk_rest.call(null,seq__7216_7230__$1);
var G__7233 = c__4205__auto___7231;
var G__7234 = cljs.core.count.call(null,c__4205__auto___7231);
var G__7235 = 0;
seq__7216_7220 = G__7232;
chunk__7217_7221 = G__7233;
count__7218_7222 = G__7234;
i__7219_7223 = G__7235;
continue;
}
} else
{var n_7236 = cljs.core.first.call(null,seq__7216_7230__$1);goog.style.setStyle(n_7236,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7237 = cljs.core.next.call(null,seq__7216_7230__$1);
var G__7238 = null;
var G__7239 = 0;
var G__7240 = 0;
seq__7216_7220 = G__7237;
chunk__7217_7221 = G__7238;
count__7218_7222 = G__7239;
i__7219_7223 = G__7240;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__7241){
var content = cljs.core.first(arglist__7241);
arglist__7241 = cljs.core.next(arglist__7241);
var name = cljs.core.first(arglist__7241);
var value = cljs.core.rest(arglist__7241);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__7246_7250 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7247_7251 = null;var count__7248_7252 = 0;var i__7249_7253 = 0;while(true){
if((i__7249_7253 < count__7248_7252))
{var n_7254 = cljs.core._nth.call(null,chunk__7247_7251,i__7249_7253);n_7254.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7255 = seq__7246_7250;
var G__7256 = chunk__7247_7251;
var G__7257 = count__7248_7252;
var G__7258 = (i__7249_7253 + 1);
seq__7246_7250 = G__7255;
chunk__7247_7251 = G__7256;
count__7248_7252 = G__7257;
i__7249_7253 = G__7258;
continue;
}
} else
{var temp__4126__auto___7259 = cljs.core.seq.call(null,seq__7246_7250);if(temp__4126__auto___7259)
{var seq__7246_7260__$1 = temp__4126__auto___7259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7246_7260__$1))
{var c__4205__auto___7261 = cljs.core.chunk_first.call(null,seq__7246_7260__$1);{
var G__7262 = cljs.core.chunk_rest.call(null,seq__7246_7260__$1);
var G__7263 = c__4205__auto___7261;
var G__7264 = cljs.core.count.call(null,c__4205__auto___7261);
var G__7265 = 0;
seq__7246_7250 = G__7262;
chunk__7247_7251 = G__7263;
count__7248_7252 = G__7264;
i__7249_7253 = G__7265;
continue;
}
} else
{var n_7266 = cljs.core.first.call(null,seq__7246_7260__$1);n_7266.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__7267 = cljs.core.next.call(null,seq__7246_7260__$1);
var G__7268 = null;
var G__7269 = 0;
var G__7270 = 0;
seq__7246_7250 = G__7267;
chunk__7247_7251 = G__7268;
count__7248_7252 = G__7269;
i__7249_7253 = G__7270;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__7271){
var content = cljs.core.first(arglist__7271);
arglist__7271 = cljs.core.next(arglist__7271);
var name = cljs.core.first(arglist__7271);
var value = cljs.core.rest(arglist__7271);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__7276_7280 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7277_7281 = null;var count__7278_7282 = 0;var i__7279_7283 = 0;while(true){
if((i__7279_7283 < count__7278_7282))
{var n_7284 = cljs.core._nth.call(null,chunk__7277_7281,i__7279_7283);n_7284.removeAttribute(cljs.core.name.call(null,name));
{
var G__7285 = seq__7276_7280;
var G__7286 = chunk__7277_7281;
var G__7287 = count__7278_7282;
var G__7288 = (i__7279_7283 + 1);
seq__7276_7280 = G__7285;
chunk__7277_7281 = G__7286;
count__7278_7282 = G__7287;
i__7279_7283 = G__7288;
continue;
}
} else
{var temp__4126__auto___7289 = cljs.core.seq.call(null,seq__7276_7280);if(temp__4126__auto___7289)
{var seq__7276_7290__$1 = temp__4126__auto___7289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7276_7290__$1))
{var c__4205__auto___7291 = cljs.core.chunk_first.call(null,seq__7276_7290__$1);{
var G__7292 = cljs.core.chunk_rest.call(null,seq__7276_7290__$1);
var G__7293 = c__4205__auto___7291;
var G__7294 = cljs.core.count.call(null,c__4205__auto___7291);
var G__7295 = 0;
seq__7276_7280 = G__7292;
chunk__7277_7281 = G__7293;
count__7278_7282 = G__7294;
i__7279_7283 = G__7295;
continue;
}
} else
{var n_7296 = cljs.core.first.call(null,seq__7276_7290__$1);n_7296.removeAttribute(cljs.core.name.call(null,name));
{
var G__7297 = cljs.core.next.call(null,seq__7276_7290__$1);
var G__7298 = null;
var G__7299 = 0;
var G__7300 = 0;
seq__7276_7280 = G__7297;
chunk__7277_7281 = G__7298;
count__7278_7282 = G__7299;
i__7279_7283 = G__7300;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__7302 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__7302,0,null);var v = cljs.core.nth.call(null,vec__7302,1,null);if(cljs.core.truth_((function (){var and__3445__auto__ = k;if(cljs.core.truth_(and__3445__auto__))
{return v;
} else
{return and__3445__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__7303_SHARP_){var attr = attrs__$1.item(p1__7303_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__7310_7316 = cljs.core.seq.call(null,styles);var chunk__7311_7317 = null;var count__7312_7318 = 0;var i__7313_7319 = 0;while(true){
if((i__7313_7319 < count__7312_7318))
{var vec__7314_7320 = cljs.core._nth.call(null,chunk__7311_7317,i__7313_7319);var name_7321 = cljs.core.nth.call(null,vec__7314_7320,0,null);var value_7322 = cljs.core.nth.call(null,vec__7314_7320,1,null);domina.set_style_BANG_.call(null,content,name_7321,value_7322);
{
var G__7323 = seq__7310_7316;
var G__7324 = chunk__7311_7317;
var G__7325 = count__7312_7318;
var G__7326 = (i__7313_7319 + 1);
seq__7310_7316 = G__7323;
chunk__7311_7317 = G__7324;
count__7312_7318 = G__7325;
i__7313_7319 = G__7326;
continue;
}
} else
{var temp__4126__auto___7327 = cljs.core.seq.call(null,seq__7310_7316);if(temp__4126__auto___7327)
{var seq__7310_7328__$1 = temp__4126__auto___7327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7310_7328__$1))
{var c__4205__auto___7329 = cljs.core.chunk_first.call(null,seq__7310_7328__$1);{
var G__7330 = cljs.core.chunk_rest.call(null,seq__7310_7328__$1);
var G__7331 = c__4205__auto___7329;
var G__7332 = cljs.core.count.call(null,c__4205__auto___7329);
var G__7333 = 0;
seq__7310_7316 = G__7330;
chunk__7311_7317 = G__7331;
count__7312_7318 = G__7332;
i__7313_7319 = G__7333;
continue;
}
} else
{var vec__7315_7334 = cljs.core.first.call(null,seq__7310_7328__$1);var name_7335 = cljs.core.nth.call(null,vec__7315_7334,0,null);var value_7336 = cljs.core.nth.call(null,vec__7315_7334,1,null);domina.set_style_BANG_.call(null,content,name_7335,value_7336);
{
var G__7337 = cljs.core.next.call(null,seq__7310_7328__$1);
var G__7338 = null;
var G__7339 = 0;
var G__7340 = 0;
seq__7310_7316 = G__7337;
chunk__7311_7317 = G__7338;
count__7312_7318 = G__7339;
i__7313_7319 = G__7340;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__7347_7353 = cljs.core.seq.call(null,attrs);var chunk__7348_7354 = null;var count__7349_7355 = 0;var i__7350_7356 = 0;while(true){
if((i__7350_7356 < count__7349_7355))
{var vec__7351_7357 = cljs.core._nth.call(null,chunk__7348_7354,i__7350_7356);var name_7358 = cljs.core.nth.call(null,vec__7351_7357,0,null);var value_7359 = cljs.core.nth.call(null,vec__7351_7357,1,null);domina.set_attr_BANG_.call(null,content,name_7358,value_7359);
{
var G__7360 = seq__7347_7353;
var G__7361 = chunk__7348_7354;
var G__7362 = count__7349_7355;
var G__7363 = (i__7350_7356 + 1);
seq__7347_7353 = G__7360;
chunk__7348_7354 = G__7361;
count__7349_7355 = G__7362;
i__7350_7356 = G__7363;
continue;
}
} else
{var temp__4126__auto___7364 = cljs.core.seq.call(null,seq__7347_7353);if(temp__4126__auto___7364)
{var seq__7347_7365__$1 = temp__4126__auto___7364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7347_7365__$1))
{var c__4205__auto___7366 = cljs.core.chunk_first.call(null,seq__7347_7365__$1);{
var G__7367 = cljs.core.chunk_rest.call(null,seq__7347_7365__$1);
var G__7368 = c__4205__auto___7366;
var G__7369 = cljs.core.count.call(null,c__4205__auto___7366);
var G__7370 = 0;
seq__7347_7353 = G__7367;
chunk__7348_7354 = G__7368;
count__7349_7355 = G__7369;
i__7350_7356 = G__7370;
continue;
}
} else
{var vec__7352_7371 = cljs.core.first.call(null,seq__7347_7365__$1);var name_7372 = cljs.core.nth.call(null,vec__7352_7371,0,null);var value_7373 = cljs.core.nth.call(null,vec__7352_7371,1,null);domina.set_attr_BANG_.call(null,content,name_7372,value_7373);
{
var G__7374 = cljs.core.next.call(null,seq__7347_7365__$1);
var G__7375 = null;
var G__7376 = 0;
var G__7377 = 0;
seq__7347_7353 = G__7374;
chunk__7348_7354 = G__7375;
count__7349_7355 = G__7376;
i__7350_7356 = G__7377;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__7382_7386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7383_7387 = null;var count__7384_7388 = 0;var i__7385_7389 = 0;while(true){
if((i__7385_7389 < count__7384_7388))
{var node_7390 = cljs.core._nth.call(null,chunk__7383_7387,i__7385_7389);goog.dom.classes.add(node_7390,class$);
{
var G__7391 = seq__7382_7386;
var G__7392 = chunk__7383_7387;
var G__7393 = count__7384_7388;
var G__7394 = (i__7385_7389 + 1);
seq__7382_7386 = G__7391;
chunk__7383_7387 = G__7392;
count__7384_7388 = G__7393;
i__7385_7389 = G__7394;
continue;
}
} else
{var temp__4126__auto___7395 = cljs.core.seq.call(null,seq__7382_7386);if(temp__4126__auto___7395)
{var seq__7382_7396__$1 = temp__4126__auto___7395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7382_7396__$1))
{var c__4205__auto___7397 = cljs.core.chunk_first.call(null,seq__7382_7396__$1);{
var G__7398 = cljs.core.chunk_rest.call(null,seq__7382_7396__$1);
var G__7399 = c__4205__auto___7397;
var G__7400 = cljs.core.count.call(null,c__4205__auto___7397);
var G__7401 = 0;
seq__7382_7386 = G__7398;
chunk__7383_7387 = G__7399;
count__7384_7388 = G__7400;
i__7385_7389 = G__7401;
continue;
}
} else
{var node_7402 = cljs.core.first.call(null,seq__7382_7396__$1);goog.dom.classes.add(node_7402,class$);
{
var G__7403 = cljs.core.next.call(null,seq__7382_7396__$1);
var G__7404 = null;
var G__7405 = 0;
var G__7406 = 0;
seq__7382_7386 = G__7403;
chunk__7383_7387 = G__7404;
count__7384_7388 = G__7405;
i__7385_7389 = G__7406;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__7411_7415 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7412_7416 = null;var count__7413_7417 = 0;var i__7414_7418 = 0;while(true){
if((i__7414_7418 < count__7413_7417))
{var node_7419 = cljs.core._nth.call(null,chunk__7412_7416,i__7414_7418);goog.dom.classes.remove(node_7419,class$);
{
var G__7420 = seq__7411_7415;
var G__7421 = chunk__7412_7416;
var G__7422 = count__7413_7417;
var G__7423 = (i__7414_7418 + 1);
seq__7411_7415 = G__7420;
chunk__7412_7416 = G__7421;
count__7413_7417 = G__7422;
i__7414_7418 = G__7423;
continue;
}
} else
{var temp__4126__auto___7424 = cljs.core.seq.call(null,seq__7411_7415);if(temp__4126__auto___7424)
{var seq__7411_7425__$1 = temp__4126__auto___7424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7411_7425__$1))
{var c__4205__auto___7426 = cljs.core.chunk_first.call(null,seq__7411_7425__$1);{
var G__7427 = cljs.core.chunk_rest.call(null,seq__7411_7425__$1);
var G__7428 = c__4205__auto___7426;
var G__7429 = cljs.core.count.call(null,c__4205__auto___7426);
var G__7430 = 0;
seq__7411_7415 = G__7427;
chunk__7412_7416 = G__7428;
count__7413_7417 = G__7429;
i__7414_7418 = G__7430;
continue;
}
} else
{var node_7431 = cljs.core.first.call(null,seq__7411_7425__$1);goog.dom.classes.remove(node_7431,class$);
{
var G__7432 = cljs.core.next.call(null,seq__7411_7425__$1);
var G__7433 = null;
var G__7434 = 0;
var G__7435 = 0;
seq__7411_7415 = G__7432;
chunk__7412_7416 = G__7433;
count__7413_7417 = G__7434;
i__7414_7418 = G__7435;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__7440_7444 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7441_7445 = null;var count__7442_7446 = 0;var i__7443_7447 = 0;while(true){
if((i__7443_7447 < count__7442_7446))
{var node_7448 = cljs.core._nth.call(null,chunk__7441_7445,i__7443_7447);goog.dom.classes.toggle(node_7448,class$);
{
var G__7449 = seq__7440_7444;
var G__7450 = chunk__7441_7445;
var G__7451 = count__7442_7446;
var G__7452 = (i__7443_7447 + 1);
seq__7440_7444 = G__7449;
chunk__7441_7445 = G__7450;
count__7442_7446 = G__7451;
i__7443_7447 = G__7452;
continue;
}
} else
{var temp__4126__auto___7453 = cljs.core.seq.call(null,seq__7440_7444);if(temp__4126__auto___7453)
{var seq__7440_7454__$1 = temp__4126__auto___7453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7440_7454__$1))
{var c__4205__auto___7455 = cljs.core.chunk_first.call(null,seq__7440_7454__$1);{
var G__7456 = cljs.core.chunk_rest.call(null,seq__7440_7454__$1);
var G__7457 = c__4205__auto___7455;
var G__7458 = cljs.core.count.call(null,c__4205__auto___7455);
var G__7459 = 0;
seq__7440_7444 = G__7456;
chunk__7441_7445 = G__7457;
count__7442_7446 = G__7458;
i__7443_7447 = G__7459;
continue;
}
} else
{var node_7460 = cljs.core.first.call(null,seq__7440_7454__$1);goog.dom.classes.toggle(node_7460,class$);
{
var G__7461 = cljs.core.next.call(null,seq__7440_7454__$1);
var G__7462 = null;
var G__7463 = 0;
var G__7464 = 0;
seq__7440_7444 = G__7461;
chunk__7441_7445 = G__7462;
count__7442_7446 = G__7463;
i__7443_7447 = G__7464;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_7473__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__7469_7474 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7470_7475 = null;var count__7471_7476 = 0;var i__7472_7477 = 0;while(true){
if((i__7472_7477 < count__7471_7476))
{var node_7478 = cljs.core._nth.call(null,chunk__7470_7475,i__7472_7477);goog.dom.classes.set(node_7478,classes_7473__$1);
{
var G__7479 = seq__7469_7474;
var G__7480 = chunk__7470_7475;
var G__7481 = count__7471_7476;
var G__7482 = (i__7472_7477 + 1);
seq__7469_7474 = G__7479;
chunk__7470_7475 = G__7480;
count__7471_7476 = G__7481;
i__7472_7477 = G__7482;
continue;
}
} else
{var temp__4126__auto___7483 = cljs.core.seq.call(null,seq__7469_7474);if(temp__4126__auto___7483)
{var seq__7469_7484__$1 = temp__4126__auto___7483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7469_7484__$1))
{var c__4205__auto___7485 = cljs.core.chunk_first.call(null,seq__7469_7484__$1);{
var G__7486 = cljs.core.chunk_rest.call(null,seq__7469_7484__$1);
var G__7487 = c__4205__auto___7485;
var G__7488 = cljs.core.count.call(null,c__4205__auto___7485);
var G__7489 = 0;
seq__7469_7474 = G__7486;
chunk__7470_7475 = G__7487;
count__7471_7476 = G__7488;
i__7472_7477 = G__7489;
continue;
}
} else
{var node_7490 = cljs.core.first.call(null,seq__7469_7484__$1);goog.dom.classes.set(node_7490,classes_7473__$1);
{
var G__7491 = cljs.core.next.call(null,seq__7469_7484__$1);
var G__7492 = null;
var G__7493 = 0;
var G__7494 = 0;
seq__7469_7474 = G__7491;
chunk__7470_7475 = G__7492;
count__7471_7476 = G__7493;
i__7472_7477 = G__7494;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__7499_7503 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7500_7504 = null;var count__7501_7505 = 0;var i__7502_7506 = 0;while(true){
if((i__7502_7506 < count__7501_7505))
{var node_7507 = cljs.core._nth.call(null,chunk__7500_7504,i__7502_7506);goog.dom.setTextContent(node_7507,value);
{
var G__7508 = seq__7499_7503;
var G__7509 = chunk__7500_7504;
var G__7510 = count__7501_7505;
var G__7511 = (i__7502_7506 + 1);
seq__7499_7503 = G__7508;
chunk__7500_7504 = G__7509;
count__7501_7505 = G__7510;
i__7502_7506 = G__7511;
continue;
}
} else
{var temp__4126__auto___7512 = cljs.core.seq.call(null,seq__7499_7503);if(temp__4126__auto___7512)
{var seq__7499_7513__$1 = temp__4126__auto___7512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7499_7513__$1))
{var c__4205__auto___7514 = cljs.core.chunk_first.call(null,seq__7499_7513__$1);{
var G__7515 = cljs.core.chunk_rest.call(null,seq__7499_7513__$1);
var G__7516 = c__4205__auto___7514;
var G__7517 = cljs.core.count.call(null,c__4205__auto___7514);
var G__7518 = 0;
seq__7499_7503 = G__7515;
chunk__7500_7504 = G__7516;
count__7501_7505 = G__7517;
i__7502_7506 = G__7518;
continue;
}
} else
{var node_7519 = cljs.core.first.call(null,seq__7499_7513__$1);goog.dom.setTextContent(node_7519,value);
{
var G__7520 = cljs.core.next.call(null,seq__7499_7513__$1);
var G__7521 = null;
var G__7522 = 0;
var G__7523 = 0;
seq__7499_7503 = G__7520;
chunk__7500_7504 = G__7521;
count__7501_7505 = G__7522;
i__7502_7506 = G__7523;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__7528_7532 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7529_7533 = null;var count__7530_7534 = 0;var i__7531_7535 = 0;while(true){
if((i__7531_7535 < count__7530_7534))
{var node_7536 = cljs.core._nth.call(null,chunk__7529_7533,i__7531_7535);goog.dom.forms.setValue(node_7536,value);
{
var G__7537 = seq__7528_7532;
var G__7538 = chunk__7529_7533;
var G__7539 = count__7530_7534;
var G__7540 = (i__7531_7535 + 1);
seq__7528_7532 = G__7537;
chunk__7529_7533 = G__7538;
count__7530_7534 = G__7539;
i__7531_7535 = G__7540;
continue;
}
} else
{var temp__4126__auto___7541 = cljs.core.seq.call(null,seq__7528_7532);if(temp__4126__auto___7541)
{var seq__7528_7542__$1 = temp__4126__auto___7541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7528_7542__$1))
{var c__4205__auto___7543 = cljs.core.chunk_first.call(null,seq__7528_7542__$1);{
var G__7544 = cljs.core.chunk_rest.call(null,seq__7528_7542__$1);
var G__7545 = c__4205__auto___7543;
var G__7546 = cljs.core.count.call(null,c__4205__auto___7543);
var G__7547 = 0;
seq__7528_7532 = G__7544;
chunk__7529_7533 = G__7545;
count__7530_7534 = G__7546;
i__7531_7535 = G__7547;
continue;
}
} else
{var node_7548 = cljs.core.first.call(null,seq__7528_7542__$1);goog.dom.forms.setValue(node_7548,value);
{
var G__7549 = cljs.core.next.call(null,seq__7528_7542__$1);
var G__7550 = null;
var G__7551 = 0;
var G__7552 = 0;
seq__7528_7532 = G__7549;
chunk__7529_7533 = G__7550;
count__7530_7534 = G__7551;
i__7531_7535 = G__7552;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3445__auto__ = allows_inner_html_QMARK_;if(and__3445__auto__)
{var and__3445__auto____$1 = (function (){var or__3457__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3445__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3445__auto____$1;
}
} else
{return and__3445__auto__;
}
})()))
{var value_7563 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__7559_7564 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__7560_7565 = null;var count__7561_7566 = 0;var i__7562_7567 = 0;while(true){
if((i__7562_7567 < count__7561_7566))
{var node_7568 = cljs.core._nth.call(null,chunk__7560_7565,i__7562_7567);node_7568.innerHTML = value_7563;
{
var G__7569 = seq__7559_7564;
var G__7570 = chunk__7560_7565;
var G__7571 = count__7561_7566;
var G__7572 = (i__7562_7567 + 1);
seq__7559_7564 = G__7569;
chunk__7560_7565 = G__7570;
count__7561_7566 = G__7571;
i__7562_7567 = G__7572;
continue;
}
} else
{var temp__4126__auto___7573 = cljs.core.seq.call(null,seq__7559_7564);if(temp__4126__auto___7573)
{var seq__7559_7574__$1 = temp__4126__auto___7573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7559_7574__$1))
{var c__4205__auto___7575 = cljs.core.chunk_first.call(null,seq__7559_7574__$1);{
var G__7576 = cljs.core.chunk_rest.call(null,seq__7559_7574__$1);
var G__7577 = c__4205__auto___7575;
var G__7578 = cljs.core.count.call(null,c__4205__auto___7575);
var G__7579 = 0;
seq__7559_7564 = G__7576;
chunk__7560_7565 = G__7577;
count__7561_7566 = G__7578;
i__7562_7567 = G__7579;
continue;
}
} else
{var node_7580 = cljs.core.first.call(null,seq__7559_7574__$1);node_7580.innerHTML = value_7563;
{
var G__7581 = cljs.core.next.call(null,seq__7559_7574__$1);
var G__7582 = null;
var G__7583 = 0;
var G__7584 = 0;
seq__7559_7564 = G__7581;
chunk__7560_7565 = G__7582;
count__7561_7566 = G__7583;
i__7562_7567 = G__7584;
continue;
}
}
} else
{}
}
break;
}
}catch (e7558){if((e7558 instanceof Error))
{var e_7585 = e7558;domina.replace_children_BANG_.call(null,content,value_7563);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7558;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3445__auto__ = bubble;if(cljs.core.truth_(and__3445__auto__))
{return (value == null);
} else
{return and__3445__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3457__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__7592_7596 = cljs.core.seq.call(null,children);var chunk__7593_7597 = null;var count__7594_7598 = 0;var i__7595_7599 = 0;while(true){
if((i__7595_7599 < count__7594_7598))
{var child_7600 = cljs.core._nth.call(null,chunk__7593_7597,i__7595_7599);frag.appendChild(child_7600);
{
var G__7601 = seq__7592_7596;
var G__7602 = chunk__7593_7597;
var G__7603 = count__7594_7598;
var G__7604 = (i__7595_7599 + 1);
seq__7592_7596 = G__7601;
chunk__7593_7597 = G__7602;
count__7594_7598 = G__7603;
i__7595_7599 = G__7604;
continue;
}
} else
{var temp__4126__auto___7605 = cljs.core.seq.call(null,seq__7592_7596);if(temp__4126__auto___7605)
{var seq__7592_7606__$1 = temp__4126__auto___7605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7592_7606__$1))
{var c__4205__auto___7607 = cljs.core.chunk_first.call(null,seq__7592_7606__$1);{
var G__7608 = cljs.core.chunk_rest.call(null,seq__7592_7606__$1);
var G__7609 = c__4205__auto___7607;
var G__7610 = cljs.core.count.call(null,c__4205__auto___7607);
var G__7611 = 0;
seq__7592_7596 = G__7608;
chunk__7593_7597 = G__7609;
count__7594_7598 = G__7610;
i__7595_7599 = G__7611;
continue;
}
} else
{var child_7612 = cljs.core.first.call(null,seq__7592_7606__$1);frag.appendChild(child_7612);
{
var G__7613 = cljs.core.next.call(null,seq__7592_7606__$1);
var G__7614 = null;
var G__7615 = 0;
var G__7616 = 0;
seq__7592_7596 = G__7613;
chunk__7593_7597 = G__7614;
count__7594_7598 = G__7615;
i__7595_7599 = G__7616;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__7586_SHARP_,p2__7587_SHARP_){return f.call(null,p1__7586_SHARP_,p2__7587_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3445__auto__ = obj;if(cljs.core.truth_(and__3445__auto__))
{var and__3445__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3445__auto____$1)
{return obj.length;
} else
{return and__3445__auto____$1;
}
} else
{return and__3445__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__7618 = list_thing;if(G__7618)
{var bit__4107__auto__ = (G__7618.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4107__auto__) || (G__7618.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7618.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7618);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7618);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__7619 = content;if(G__7619)
{var bit__4107__auto__ = (G__7619.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4107__auto__) || (G__7619.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7619.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7619);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7619);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__7620 = content;if(G__7620)
{var bit__4107__auto__ = (G__7620.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4107__auto__) || (G__7620.cljs$core$ISeqable$))
{return true;
} else
{if((!G__7620.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7620);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7620);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map