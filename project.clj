(defproject
  heatmap-web
  "0.1.0-SNAPSHOT"
  :repl-options
  {:init-ns heatmap-web.repl}
  :dependencies
  [[ring-server "0.3.1"]
   [com.h2database/h2 "1.3.175"]
   [domina "1.0.2"]
   [environ "0.5.0"]
   [com.taoensso/timbre "3.2.1"]
   [markdown-clj "0.9.44"]
   [prismatic/dommy "0.1.2"]
   [org.clojure/clojurescript "0.0-2202"]
   [org.clojure/clojure "1.6.0"]
   [com.taoensso/tower "2.0.2"]
   [net.drib/blade "0.1.0"]
   [log4j
    "1.2.17"
    :exclusions
    [javax.mail/mail
     javax.jms/jms
     com.sun.jdmk/jmxtools
     com.sun.jmx/jmxri]]
   [korma "0.3.1"]
   [cljs-ajax "0.2.4"]
   [selmer "0.6.6"]
   [lib-noir "0.8.3"]]
  :cljsbuild
  {:builds
   [{:source-paths ["src-cljs"],
     :compiler {
                :output-to "resources/public/js/site.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :source-map true}}]}
  :ring
  {:handler heatmap-web.handler/app,
   :init heatmap-web.handler/init,
   :destroy heatmap-web.handler/destroy}
  :profiles
  {:uberjar {:aot :all},
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}},
   :dev
   {:dependencies [[ring-mock "0.1.5"] [ring/ring-devel "1.2.2"]],
    :env {:dev true}}}
  :url
  "http://example.com/FIXME"
  :plugins
  [[lein-ring "0.8.10"]
   [lein-environ "0.5.0"]
   [lein-cljsbuild "0.3.3"]]
  :description
  "FIXME: write description"
  :min-lein-version "2.0.0")
