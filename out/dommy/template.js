// Compiled by ClojureScript 0.0-2202
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj5687 = {};return obj5687;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3445__auto__ = this$;if(and__3445__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3445__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4084__auto__ = (((this$ == null))?null:this$);return (function (){var or__3457__auto__ = (dommy.template._elem[goog.typeOf(x__4084__auto__)]);if(or__3457__auto__)
{return or__3457__auto__;
} else
{var or__3457__auto____$1 = (dommy.template._elem["_"]);if(or__3457__auto____$1)
{return or__3457__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_5690 = node_str.substring(base_idx);while(true){
var next_idx_5691 = dommy.template.next_css_index.call(null,str_5690,1);var frag_5692 = (((next_idx_5691 >= 0))?str_5690.substring(0,next_idx_5691):str_5690);var G__5689_5693 = frag_5692.charAt(0);if(cljs.core._EQ_.call(null,"#",G__5689_5693))
{node.setAttribute("id",frag_5692.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__5689_5693))
{dommy.attrs.add_class_BANG_.call(null,node,frag_5692.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_5692.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_5691 >= 0))
{{
var G__5694 = str_5690.substring(next_idx_5691);
str_5690 = G__5694;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__5700 = data;if(G__5700)
{var bit__4107__auto__ = null;if(cljs.core.truth_((function (){var or__3457__auto__ = bit__4107__auto__;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return G__5700.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5700.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5700);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5700);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__5701_5705 = cljs.core.seq.call(null,data);var chunk__5702_5706 = null;var count__5703_5707 = 0;var i__5704_5708 = 0;while(true){
if((i__5704_5708 < count__5703_5707))
{var child_5709 = cljs.core._nth.call(null,chunk__5702_5706,i__5704_5708);__GT_document_fragment.call(null,result_frag,child_5709);
{
var G__5710 = seq__5701_5705;
var G__5711 = chunk__5702_5706;
var G__5712 = count__5703_5707;
var G__5713 = (i__5704_5708 + 1);
seq__5701_5705 = G__5710;
chunk__5702_5706 = G__5711;
count__5703_5707 = G__5712;
i__5704_5708 = G__5713;
continue;
}
} else
{var temp__4126__auto___5714 = cljs.core.seq.call(null,seq__5701_5705);if(temp__4126__auto___5714)
{var seq__5701_5715__$1 = temp__4126__auto___5714;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5701_5715__$1))
{var c__4205__auto___5716 = cljs.core.chunk_first.call(null,seq__5701_5715__$1);{
var G__5717 = cljs.core.chunk_rest.call(null,seq__5701_5715__$1);
var G__5718 = c__4205__auto___5716;
var G__5719 = cljs.core.count.call(null,c__4205__auto___5716);
var G__5720 = 0;
seq__5701_5705 = G__5717;
chunk__5702_5706 = G__5718;
count__5703_5707 = G__5719;
i__5704_5708 = G__5720;
continue;
}
} else
{var child_5721 = cljs.core.first.call(null,seq__5701_5715__$1);__GT_document_fragment.call(null,result_frag,child_5721);
{
var G__5722 = cljs.core.next.call(null,seq__5701_5715__$1);
var G__5723 = null;
var G__5724 = 0;
var G__5725 = 0;
seq__5701_5705 = G__5722;
chunk__5702_5706 = G__5723;
count__5703_5707 = G__5724;
i__5704_5708 = G__5725;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__5727 = data;if(G__5727)
{var bit__4107__auto__ = null;if(cljs.core.truth_((function (){var or__3457__auto__ = bit__4107__auto__;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return G__5727.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5727.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5727);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5727);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__5728){var vec__5748 = p__5728;var tag_name = cljs.core.nth.call(null,vec__5748,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__5748,1,null);var children = cljs.core.nthnext.call(null,vec__5748,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__5750 = maybe_attrs;if(G__5750)
{var bit__4107__auto__ = null;if(cljs.core.truth_((function (){var or__3457__auto__ = bit__4107__auto__;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return G__5750.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5750.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5750);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5750);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__5751_5767 = cljs.core.seq.call(null,attrs);var chunk__5752_5768 = null;var count__5753_5769 = 0;var i__5754_5770 = 0;while(true){
if((i__5754_5770 < count__5753_5769))
{var vec__5755_5771 = cljs.core._nth.call(null,chunk__5752_5768,i__5754_5770);var k_5772 = cljs.core.nth.call(null,vec__5755_5771,0,null);var v_5773 = cljs.core.nth.call(null,vec__5755_5771,1,null);var G__5756_5774 = k_5772;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__5756_5774))
{var seq__5757_5775 = cljs.core.seq.call(null,v_5773);var chunk__5758_5776 = null;var count__5759_5777 = 0;var i__5760_5778 = 0;while(true){
if((i__5760_5778 < count__5759_5777))
{var c_5779 = cljs.core._nth.call(null,chunk__5758_5776,i__5760_5778);dommy.attrs.add_class_BANG_.call(null,n,c_5779);
{
var G__5780 = seq__5757_5775;
var G__5781 = chunk__5758_5776;
var G__5782 = count__5759_5777;
var G__5783 = (i__5760_5778 + 1);
seq__5757_5775 = G__5780;
chunk__5758_5776 = G__5781;
count__5759_5777 = G__5782;
i__5760_5778 = G__5783;
continue;
}
} else
{var temp__4126__auto___5784 = cljs.core.seq.call(null,seq__5757_5775);if(temp__4126__auto___5784)
{var seq__5757_5785__$1 = temp__4126__auto___5784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5757_5785__$1))
{var c__4205__auto___5786 = cljs.core.chunk_first.call(null,seq__5757_5785__$1);{
var G__5787 = cljs.core.chunk_rest.call(null,seq__5757_5785__$1);
var G__5788 = c__4205__auto___5786;
var G__5789 = cljs.core.count.call(null,c__4205__auto___5786);
var G__5790 = 0;
seq__5757_5775 = G__5787;
chunk__5758_5776 = G__5788;
count__5759_5777 = G__5789;
i__5760_5778 = G__5790;
continue;
}
} else
{var c_5791 = cljs.core.first.call(null,seq__5757_5785__$1);dommy.attrs.add_class_BANG_.call(null,n,c_5791);
{
var G__5792 = cljs.core.next.call(null,seq__5757_5785__$1);
var G__5793 = null;
var G__5794 = 0;
var G__5795 = 0;
seq__5757_5775 = G__5792;
chunk__5758_5776 = G__5793;
count__5759_5777 = G__5794;
i__5760_5778 = G__5795;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__5756_5774))
{dommy.attrs.add_class_BANG_.call(null,n,v_5773);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_5772,v_5773);
} else
{}
}
}
{
var G__5796 = seq__5751_5767;
var G__5797 = chunk__5752_5768;
var G__5798 = count__5753_5769;
var G__5799 = (i__5754_5770 + 1);
seq__5751_5767 = G__5796;
chunk__5752_5768 = G__5797;
count__5753_5769 = G__5798;
i__5754_5770 = G__5799;
continue;
}
} else
{var temp__4126__auto___5800 = cljs.core.seq.call(null,seq__5751_5767);if(temp__4126__auto___5800)
{var seq__5751_5801__$1 = temp__4126__auto___5800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5751_5801__$1))
{var c__4205__auto___5802 = cljs.core.chunk_first.call(null,seq__5751_5801__$1);{
var G__5803 = cljs.core.chunk_rest.call(null,seq__5751_5801__$1);
var G__5804 = c__4205__auto___5802;
var G__5805 = cljs.core.count.call(null,c__4205__auto___5802);
var G__5806 = 0;
seq__5751_5767 = G__5803;
chunk__5752_5768 = G__5804;
count__5753_5769 = G__5805;
i__5754_5770 = G__5806;
continue;
}
} else
{var vec__5761_5807 = cljs.core.first.call(null,seq__5751_5801__$1);var k_5808 = cljs.core.nth.call(null,vec__5761_5807,0,null);var v_5809 = cljs.core.nth.call(null,vec__5761_5807,1,null);var G__5762_5810 = k_5808;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__5762_5810))
{var seq__5763_5811 = cljs.core.seq.call(null,v_5809);var chunk__5764_5812 = null;var count__5765_5813 = 0;var i__5766_5814 = 0;while(true){
if((i__5766_5814 < count__5765_5813))
{var c_5815 = cljs.core._nth.call(null,chunk__5764_5812,i__5766_5814);dommy.attrs.add_class_BANG_.call(null,n,c_5815);
{
var G__5816 = seq__5763_5811;
var G__5817 = chunk__5764_5812;
var G__5818 = count__5765_5813;
var G__5819 = (i__5766_5814 + 1);
seq__5763_5811 = G__5816;
chunk__5764_5812 = G__5817;
count__5765_5813 = G__5818;
i__5766_5814 = G__5819;
continue;
}
} else
{var temp__4126__auto___5820__$1 = cljs.core.seq.call(null,seq__5763_5811);if(temp__4126__auto___5820__$1)
{var seq__5763_5821__$1 = temp__4126__auto___5820__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5763_5821__$1))
{var c__4205__auto___5822 = cljs.core.chunk_first.call(null,seq__5763_5821__$1);{
var G__5823 = cljs.core.chunk_rest.call(null,seq__5763_5821__$1);
var G__5824 = c__4205__auto___5822;
var G__5825 = cljs.core.count.call(null,c__4205__auto___5822);
var G__5826 = 0;
seq__5763_5811 = G__5823;
chunk__5764_5812 = G__5824;
count__5765_5813 = G__5825;
i__5766_5814 = G__5826;
continue;
}
} else
{var c_5827 = cljs.core.first.call(null,seq__5763_5821__$1);dommy.attrs.add_class_BANG_.call(null,n,c_5827);
{
var G__5828 = cljs.core.next.call(null,seq__5763_5821__$1);
var G__5829 = null;
var G__5830 = 0;
var G__5831 = 0;
seq__5763_5811 = G__5828;
chunk__5764_5812 = G__5829;
count__5765_5813 = G__5830;
i__5766_5814 = G__5831;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__5762_5810))
{dommy.attrs.add_class_BANG_.call(null,n,v_5809);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_5808,v_5809);
} else
{}
}
}
{
var G__5832 = cljs.core.next.call(null,seq__5751_5801__$1);
var G__5833 = null;
var G__5834 = 0;
var G__5835 = 0;
seq__5751_5767 = G__5832;
chunk__5752_5768 = G__5833;
count__5753_5769 = G__5834;
i__5754_5770 = G__5835;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e5836){if((e5836 instanceof ReferenceError))
{var __5837 = e5836;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e5836;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__5839 = data;if(G__5839)
{var bit__4107__auto__ = null;if(cljs.core.truth_((function (){var or__3457__auto__ = bit__4107__auto__;if(cljs.core.truth_(or__3457__auto__))
{return or__3457__auto__;
} else
{return G__5839.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5839.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5839);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5839);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map