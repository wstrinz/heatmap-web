// Compiled by ClojureScript 0.0-2202
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3445__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3445__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3445__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__5840 = (i + class$.length);
start_from = G__5840;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(class$__$1);
} else
{var temp__4126__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___5865 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___5865))
{var class_list_5866 = temp__4124__auto___5865;var seq__5853_5867 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__5854_5868 = null;var count__5855_5869 = 0;var i__5856_5870 = 0;while(true){
if((i__5856_5870 < count__5855_5869))
{var class_5871 = cljs.core._nth.call(null,chunk__5854_5868,i__5856_5870);class_list_5866.add(class_5871);
{
var G__5872 = seq__5853_5867;
var G__5873 = chunk__5854_5868;
var G__5874 = count__5855_5869;
var G__5875 = (i__5856_5870 + 1);
seq__5853_5867 = G__5872;
chunk__5854_5868 = G__5873;
count__5855_5869 = G__5874;
i__5856_5870 = G__5875;
continue;
}
} else
{var temp__4126__auto___5876 = cljs.core.seq.call(null,seq__5853_5867);if(temp__4126__auto___5876)
{var seq__5853_5877__$1 = temp__4126__auto___5876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5853_5877__$1))
{var c__4205__auto___5878 = cljs.core.chunk_first.call(null,seq__5853_5877__$1);{
var G__5879 = cljs.core.chunk_rest.call(null,seq__5853_5877__$1);
var G__5880 = c__4205__auto___5878;
var G__5881 = cljs.core.count.call(null,c__4205__auto___5878);
var G__5882 = 0;
seq__5853_5867 = G__5879;
chunk__5854_5868 = G__5880;
count__5855_5869 = G__5881;
i__5856_5870 = G__5882;
continue;
}
} else
{var class_5883 = cljs.core.first.call(null,seq__5853_5877__$1);class_list_5866.add(class_5883);
{
var G__5884 = cljs.core.next.call(null,seq__5853_5877__$1);
var G__5885 = null;
var G__5886 = 0;
var G__5887 = 0;
seq__5853_5867 = G__5884;
chunk__5854_5868 = G__5885;
count__5855_5869 = G__5886;
i__5856_5870 = G__5887;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_5888 = elem__$1.className;var seq__5857_5889 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__5858_5890 = null;var count__5859_5891 = 0;var i__5860_5892 = 0;while(true){
if((i__5860_5892 < count__5859_5891))
{var class_5893 = cljs.core._nth.call(null,chunk__5858_5890,i__5860_5892);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5888,class_5893)))
{} else
{elem__$1.className = (((class_name_5888 === ""))?class_5893:[cljs.core.str(class_name_5888),cljs.core.str(" "),cljs.core.str(class_5893)].join(''));
}
{
var G__5894 = seq__5857_5889;
var G__5895 = chunk__5858_5890;
var G__5896 = count__5859_5891;
var G__5897 = (i__5860_5892 + 1);
seq__5857_5889 = G__5894;
chunk__5858_5890 = G__5895;
count__5859_5891 = G__5896;
i__5860_5892 = G__5897;
continue;
}
} else
{var temp__4126__auto___5898 = cljs.core.seq.call(null,seq__5857_5889);if(temp__4126__auto___5898)
{var seq__5857_5899__$1 = temp__4126__auto___5898;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5857_5899__$1))
{var c__4205__auto___5900 = cljs.core.chunk_first.call(null,seq__5857_5899__$1);{
var G__5901 = cljs.core.chunk_rest.call(null,seq__5857_5899__$1);
var G__5902 = c__4205__auto___5900;
var G__5903 = cljs.core.count.call(null,c__4205__auto___5900);
var G__5904 = 0;
seq__5857_5889 = G__5901;
chunk__5858_5890 = G__5902;
count__5859_5891 = G__5903;
i__5860_5892 = G__5904;
continue;
}
} else
{var class_5905 = cljs.core.first.call(null,seq__5857_5899__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5888,class_5905)))
{} else
{elem__$1.className = (((class_name_5888 === ""))?class_5905:[cljs.core.str(class_name_5888),cljs.core.str(" "),cljs.core.str(class_5905)].join(''));
}
{
var G__5906 = cljs.core.next.call(null,seq__5857_5899__$1);
var G__5907 = null;
var G__5908 = 0;
var G__5909 = 0;
seq__5857_5889 = G__5906;
chunk__5858_5890 = G__5907;
count__5859_5891 = G__5908;
i__5860_5892 = G__5909;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__5910__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__5861_5911 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__5862_5912 = null;var count__5863_5913 = 0;var i__5864_5914 = 0;while(true){
if((i__5864_5914 < count__5863_5913))
{var c_5915 = cljs.core._nth.call(null,chunk__5862_5912,i__5864_5914);add_class_BANG_.call(null,elem__$1,c_5915);
{
var G__5916 = seq__5861_5911;
var G__5917 = chunk__5862_5912;
var G__5918 = count__5863_5913;
var G__5919 = (i__5864_5914 + 1);
seq__5861_5911 = G__5916;
chunk__5862_5912 = G__5917;
count__5863_5913 = G__5918;
i__5864_5914 = G__5919;
continue;
}
} else
{var temp__4126__auto___5920 = cljs.core.seq.call(null,seq__5861_5911);if(temp__4126__auto___5920)
{var seq__5861_5921__$1 = temp__4126__auto___5920;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5861_5921__$1))
{var c__4205__auto___5922 = cljs.core.chunk_first.call(null,seq__5861_5921__$1);{
var G__5923 = cljs.core.chunk_rest.call(null,seq__5861_5921__$1);
var G__5924 = c__4205__auto___5922;
var G__5925 = cljs.core.count.call(null,c__4205__auto___5922);
var G__5926 = 0;
seq__5861_5911 = G__5923;
chunk__5862_5912 = G__5924;
count__5863_5913 = G__5925;
i__5864_5914 = G__5926;
continue;
}
} else
{var c_5927 = cljs.core.first.call(null,seq__5861_5921__$1);add_class_BANG_.call(null,elem__$1,c_5927);
{
var G__5928 = cljs.core.next.call(null,seq__5861_5921__$1);
var G__5929 = null;
var G__5930 = 0;
var G__5931 = 0;
seq__5861_5911 = G__5928;
chunk__5862_5912 = G__5929;
count__5863_5913 = G__5930;
i__5864_5914 = G__5931;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__5910 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5910__delegate.call(this,elem,classes,more_classes);};
G__5910.cljs$lang$maxFixedArity = 2;
G__5910.cljs$lang$applyTo = (function (arglist__5932){
var elem = cljs.core.first(arglist__5932);
arglist__5932 = cljs.core.next(arglist__5932);
var classes = cljs.core.first(arglist__5932);
var more_classes = cljs.core.rest(arglist__5932);
return G__5910__delegate(elem,classes,more_classes);
});
G__5910.cljs$core$IFn$_invoke$arity$variadic = G__5910__delegate;
return G__5910;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4124__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;{
var G__5933 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__5933;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___5942 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___5942))
{var class_list_5943 = temp__4124__auto___5942;class_list_5943.remove(class$__$1);
} else
{var class_name_5944 = elem__$1.className;var new_class_name_5945 = dommy.attrs.remove_class_str.call(null,class_name_5944,class$__$1);if((class_name_5944 === new_class_name_5945))
{} else
{elem__$1.className = new_class_name_5945;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__5946__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__5938 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__5939 = null;var count__5940 = 0;var i__5941 = 0;while(true){
if((i__5941 < count__5940))
{var c = cljs.core._nth.call(null,chunk__5939,i__5941);remove_class_BANG_.call(null,elem__$1,c);
{
var G__5947 = seq__5938;
var G__5948 = chunk__5939;
var G__5949 = count__5940;
var G__5950 = (i__5941 + 1);
seq__5938 = G__5947;
chunk__5939 = G__5948;
count__5940 = G__5949;
i__5941 = G__5950;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__5938);if(temp__4126__auto__)
{var seq__5938__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5938__$1))
{var c__4205__auto__ = cljs.core.chunk_first.call(null,seq__5938__$1);{
var G__5951 = cljs.core.chunk_rest.call(null,seq__5938__$1);
var G__5952 = c__4205__auto__;
var G__5953 = cljs.core.count.call(null,c__4205__auto__);
var G__5954 = 0;
seq__5938 = G__5951;
chunk__5939 = G__5952;
count__5940 = G__5953;
i__5941 = G__5954;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__5938__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__5955 = cljs.core.next.call(null,seq__5938__$1);
var G__5956 = null;
var G__5957 = 0;
var G__5958 = 0;
seq__5938 = G__5955;
chunk__5939 = G__5956;
count__5940 = G__5957;
i__5941 = G__5958;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__5946 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5946__delegate.call(this,elem,class$,classes);};
G__5946.cljs$lang$maxFixedArity = 2;
G__5946.cljs$lang$applyTo = (function (arglist__5959){
var elem = cljs.core.first(arglist__5959);
arglist__5959 = cljs.core.next(arglist__5959);
var class$ = cljs.core.first(arglist__5959);
var classes = cljs.core.rest(arglist__5959);
return G__5946__delegate(elem,class$,classes);
});
G__5946.cljs$core$IFn$_invoke$arity$variadic = G__5946__delegate;
return G__5946;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4124__auto___5960 = elem__$1.classList;if(cljs.core.truth_(temp__4124__auto___5960))
{var class_list_5961 = temp__4124__auto___5960;class_list_5961.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__5964){var vec__5965 = p__5964;var k = cljs.core.nth.call(null,vec__5965,0,null);var v = cljs.core.nth.call(null,vec__5965,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__5972_5978 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__5973_5979 = null;var count__5974_5980 = 0;var i__5975_5981 = 0;while(true){
if((i__5975_5981 < count__5974_5980))
{var vec__5976_5982 = cljs.core._nth.call(null,chunk__5973_5979,i__5975_5981);var k_5983 = cljs.core.nth.call(null,vec__5976_5982,0,null);var v_5984 = cljs.core.nth.call(null,vec__5976_5982,1,null);(style[cljs.core.name.call(null,k_5983)] = v_5984);
{
var G__5985 = seq__5972_5978;
var G__5986 = chunk__5973_5979;
var G__5987 = count__5974_5980;
var G__5988 = (i__5975_5981 + 1);
seq__5972_5978 = G__5985;
chunk__5973_5979 = G__5986;
count__5974_5980 = G__5987;
i__5975_5981 = G__5988;
continue;
}
} else
{var temp__4126__auto___5989 = cljs.core.seq.call(null,seq__5972_5978);if(temp__4126__auto___5989)
{var seq__5972_5990__$1 = temp__4126__auto___5989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5972_5990__$1))
{var c__4205__auto___5991 = cljs.core.chunk_first.call(null,seq__5972_5990__$1);{
var G__5992 = cljs.core.chunk_rest.call(null,seq__5972_5990__$1);
var G__5993 = c__4205__auto___5991;
var G__5994 = cljs.core.count.call(null,c__4205__auto___5991);
var G__5995 = 0;
seq__5972_5978 = G__5992;
chunk__5973_5979 = G__5993;
count__5974_5980 = G__5994;
i__5975_5981 = G__5995;
continue;
}
} else
{var vec__5977_5996 = cljs.core.first.call(null,seq__5972_5990__$1);var k_5997 = cljs.core.nth.call(null,vec__5977_5996,0,null);var v_5998 = cljs.core.nth.call(null,vec__5977_5996,1,null);(style[cljs.core.name.call(null,k_5997)] = v_5998);
{
var G__5999 = cljs.core.next.call(null,seq__5972_5990__$1);
var G__6000 = null;
var G__6001 = 0;
var G__6002 = 0;
seq__5972_5978 = G__5999;
chunk__5973_5979 = G__6000;
count__5974_5980 = G__6001;
i__5975_5981 = G__6002;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6003){
var elem = cljs.core.first(arglist__6003);
var kvs = cljs.core.rest(arglist__6003);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6010_6016 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__6011_6017 = null;var count__6012_6018 = 0;var i__6013_6019 = 0;while(true){
if((i__6013_6019 < count__6012_6018))
{var vec__6014_6020 = cljs.core._nth.call(null,chunk__6011_6017,i__6013_6019);var k_6021 = cljs.core.nth.call(null,vec__6014_6020,0,null);var v_6022 = cljs.core.nth.call(null,vec__6014_6020,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6021,[cljs.core.str(v_6022),cljs.core.str("px")].join(''));
{
var G__6023 = seq__6010_6016;
var G__6024 = chunk__6011_6017;
var G__6025 = count__6012_6018;
var G__6026 = (i__6013_6019 + 1);
seq__6010_6016 = G__6023;
chunk__6011_6017 = G__6024;
count__6012_6018 = G__6025;
i__6013_6019 = G__6026;
continue;
}
} else
{var temp__4126__auto___6027 = cljs.core.seq.call(null,seq__6010_6016);if(temp__4126__auto___6027)
{var seq__6010_6028__$1 = temp__4126__auto___6027;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6010_6028__$1))
{var c__4205__auto___6029 = cljs.core.chunk_first.call(null,seq__6010_6028__$1);{
var G__6030 = cljs.core.chunk_rest.call(null,seq__6010_6028__$1);
var G__6031 = c__4205__auto___6029;
var G__6032 = cljs.core.count.call(null,c__4205__auto___6029);
var G__6033 = 0;
seq__6010_6016 = G__6030;
chunk__6011_6017 = G__6031;
count__6012_6018 = G__6032;
i__6013_6019 = G__6033;
continue;
}
} else
{var vec__6015_6034 = cljs.core.first.call(null,seq__6010_6028__$1);var k_6035 = cljs.core.nth.call(null,vec__6015_6034,0,null);var v_6036 = cljs.core.nth.call(null,vec__6015_6034,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_6035,[cljs.core.str(v_6036),cljs.core.str("px")].join(''));
{
var G__6037 = cljs.core.next.call(null,seq__6010_6028__$1);
var G__6038 = null;
var G__6039 = 0;
var G__6040 = 0;
seq__6010_6016 = G__6037;
chunk__6011_6017 = G__6038;
count__6012_6018 = G__6039;
i__6013_6019 = G__6040;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6041){
var elem = cljs.core.first(arglist__6041);
var kvs = cljs.core.rest(arglist__6041);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__6050 = dommy.template.__GT_node_like.call(null,elem);(G__6050[cljs.core.name.call(null,k)] = v);
return G__6050;
} else
{var G__6051 = dommy.template.__GT_node_like.call(null,elem);G__6051.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__6051;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6058__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6052_6059 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__6053_6060 = null;var count__6054_6061 = 0;var i__6055_6062 = 0;while(true){
if((i__6055_6062 < count__6054_6061))
{var vec__6056_6063 = cljs.core._nth.call(null,chunk__6053_6060,i__6055_6062);var k_6064__$1 = cljs.core.nth.call(null,vec__6056_6063,0,null);var v_6065__$1 = cljs.core.nth.call(null,vec__6056_6063,1,null);set_attr_BANG_.call(null,elem__$1,k_6064__$1,v_6065__$1);
{
var G__6066 = seq__6052_6059;
var G__6067 = chunk__6053_6060;
var G__6068 = count__6054_6061;
var G__6069 = (i__6055_6062 + 1);
seq__6052_6059 = G__6066;
chunk__6053_6060 = G__6067;
count__6054_6061 = G__6068;
i__6055_6062 = G__6069;
continue;
}
} else
{var temp__4126__auto___6070 = cljs.core.seq.call(null,seq__6052_6059);if(temp__4126__auto___6070)
{var seq__6052_6071__$1 = temp__4126__auto___6070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6052_6071__$1))
{var c__4205__auto___6072 = cljs.core.chunk_first.call(null,seq__6052_6071__$1);{
var G__6073 = cljs.core.chunk_rest.call(null,seq__6052_6071__$1);
var G__6074 = c__4205__auto___6072;
var G__6075 = cljs.core.count.call(null,c__4205__auto___6072);
var G__6076 = 0;
seq__6052_6059 = G__6073;
chunk__6053_6060 = G__6074;
count__6054_6061 = G__6075;
i__6055_6062 = G__6076;
continue;
}
} else
{var vec__6057_6077 = cljs.core.first.call(null,seq__6052_6071__$1);var k_6078__$1 = cljs.core.nth.call(null,vec__6057_6077,0,null);var v_6079__$1 = cljs.core.nth.call(null,vec__6057_6077,1,null);set_attr_BANG_.call(null,elem__$1,k_6078__$1,v_6079__$1);
{
var G__6080 = cljs.core.next.call(null,seq__6052_6071__$1);
var G__6081 = null;
var G__6082 = 0;
var G__6083 = 0;
seq__6052_6059 = G__6080;
chunk__6053_6060 = G__6081;
count__6054_6061 = G__6082;
i__6055_6062 = G__6083;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6058 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6058__delegate.call(this,elem,k,v,kvs);};
G__6058.cljs$lang$maxFixedArity = 3;
G__6058.cljs$lang$applyTo = (function (arglist__6084){
var elem = cljs.core.first(arglist__6084);
arglist__6084 = cljs.core.next(arglist__6084);
var k = cljs.core.first(arglist__6084);
arglist__6084 = cljs.core.next(arglist__6084);
var v = cljs.core.first(arglist__6084);
var kvs = cljs.core.rest(arglist__6084);
return G__6058__delegate(elem,k,v,kvs);
});
G__6058.cljs$core$IFn$_invoke$arity$variadic = G__6058__delegate;
return G__6058;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__6093__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6089_6094 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6090_6095 = null;var count__6091_6096 = 0;var i__6092_6097 = 0;while(true){
if((i__6092_6097 < count__6091_6096))
{var k_6098__$1 = cljs.core._nth.call(null,chunk__6090_6095,i__6092_6097);remove_attr_BANG_.call(null,elem__$1,k_6098__$1);
{
var G__6099 = seq__6089_6094;
var G__6100 = chunk__6090_6095;
var G__6101 = count__6091_6096;
var G__6102 = (i__6092_6097 + 1);
seq__6089_6094 = G__6099;
chunk__6090_6095 = G__6100;
count__6091_6096 = G__6101;
i__6092_6097 = G__6102;
continue;
}
} else
{var temp__4126__auto___6103 = cljs.core.seq.call(null,seq__6089_6094);if(temp__4126__auto___6103)
{var seq__6089_6104__$1 = temp__4126__auto___6103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6089_6104__$1))
{var c__4205__auto___6105 = cljs.core.chunk_first.call(null,seq__6089_6104__$1);{
var G__6106 = cljs.core.chunk_rest.call(null,seq__6089_6104__$1);
var G__6107 = c__4205__auto___6105;
var G__6108 = cljs.core.count.call(null,c__4205__auto___6105);
var G__6109 = 0;
seq__6089_6094 = G__6106;
chunk__6090_6095 = G__6107;
count__6091_6096 = G__6108;
i__6092_6097 = G__6109;
continue;
}
} else
{var k_6110__$1 = cljs.core.first.call(null,seq__6089_6104__$1);remove_attr_BANG_.call(null,elem__$1,k_6110__$1);
{
var G__6111 = cljs.core.next.call(null,seq__6089_6104__$1);
var G__6112 = null;
var G__6113 = 0;
var G__6114 = 0;
seq__6089_6094 = G__6111;
chunk__6090_6095 = G__6112;
count__6091_6096 = G__6113;
i__6092_6097 = G__6114;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6093 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6093__delegate.call(this,elem,k,ks);};
G__6093.cljs$lang$maxFixedArity = 2;
G__6093.cljs$lang$applyTo = (function (arglist__6115){
var elem = cljs.core.first(arglist__6115);
arglist__6115 = cljs.core.next(arglist__6115);
var k = cljs.core.first(arglist__6115);
var ks = cljs.core.rest(arglist__6115);
return G__6093__delegate(elem,k,ks);
});
G__6093.cljs$core$IFn$_invoke$arity$variadic = G__6093__delegate;
return G__6093;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__6117 = dommy.template.__GT_node_like.call(null,elem);G__6117.style.display = ((show_QMARK_)?"":"none");
return G__6117;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__6119 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6119,false);
return G__6119;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__6121 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6121,true);
return G__6121;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__6123 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__6123["constructor"] = Object);
return G__6123;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map