(ns lt.plugins.context
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

(def opposites (js-obj "]" "["
                       "}" "{"
                       ")" "("))

(def opens #{"(" "[" "{"})
(def closes #{")" "]" "}"})

(defn apeek [a]
  (aget a (dec (.-length a))))

(defn overlay [allow-single-quote-strings]
  (clj->js {:startState (fn []
                          (js-obj "contextstack" (array)
                                  "mode" nil))
            :token (fn [stream state base]
                     (if-not (> (.indexOf (.toLowerCase (or (.-style base) "")) "bracket") -1)
                       (do
                         (aset stream "pos" (.-pos base))
                         nil)
                       (do
                         (aset stream "pos" (dec (.-pos base)))
                         (when-let [cur (.next stream)]
                           ;;ignore inside of strings
                           (cond
                            (opens cur) (let [level (-> (.-contextstack state)
                                                        (apeek)
                                                        (:level 0)
                                                        (inc))]
                                          (.push (.-contextstack state)
                                                 {:type cur
                                                  :pos (.-pos stream)
                                                  :level level})
                                          (+ "context bracket" level))
                            (closes cur) (let [prev (-> (.-contextstack state)
                                                        (apeek))]
                                           (if (= (:type prev) (aget opposites cur))
                                             (do
                                               (.pop (.-contextstack state))
                                               (+ "context bracket" (:level prev 0)))
                                             "context bracket-mismatched"))
                            :else nil)))))}))

(behavior ::context-coloring
                  :triggers #{:object.instant}
                  :type :user
                  :desc "Editor: Enable context coloring"
                  :exclusive [::hide-context-coloring]
                  :reaction (fn [this]
                              (let [mode-name (editor/option this :mode)
                                    mode (editor/->mode this)
                                    rmode (str mode-name "-context")]
                                (when (= (.indexOf mode-name "-context") -1)
                                  (when-not (aget js/CodeMirror.modes rmode)
                                    (js/CodeMirror.defineMode rmode (fn []
                                                                      (js/CodeMirror.overlayMode mode (overlay (not (.-disallowSingleQuoteStrings mode))) true))))
                                  (editor/set-mode this rmode)
                                  (object/merge! this {::real-mode mode-name})))))

(behavior ::hide-context-coloring
                  :triggers #{:object.instant}
                  :type :user
                  :desc "Editor: Disable context coloring"
                  :exclusive [::context-coloring]
                  :reaction (fn [this]
                              (when (::real-mode @this)
                                (editor/set-mode this (::real-mode @this)))))
