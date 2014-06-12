(ns heatmap-web.routes.cljsexample
  (:require [compojure.core :refer :all]
            [heatmap-web.layout :as layout]))

(def messages
  (atom
    [{:message "Hello world"
      :user    "Foo"}
     {:message "Ajax is fun"
      :user    "Bar"}]))

(defroutes cljs-routes
  (GET "/cljsexample" [] (layout/render "cljsexample.html"))
  (GET "/map" [] (layout/render "map.html"))
  (GET "/messages" [] {:body @messages})
  (POST "/add-message" [message user]
        {:body (swap! messages conj {:message message :user user})}))
