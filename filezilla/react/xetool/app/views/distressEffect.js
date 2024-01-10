GlobaltemplateCache.put("modules/distressEffect/views/view.html",'<div class="pane-content pos-rlt" ng-controller="DistressEffectController" ng-init="init()">\n    <div class="design-list">\n        <div class="nx-thumbs">\n            <ul class="pane-scroll">\n                <li class="scroll-items" ng-class="{active:$index == selectedIndex}" ng-repeat="distressEffect in distressEffectList">\n                    <img ng-click="setDistressEffect(distressEffect,$index)" ng-src="{{thumUrl(distressEffect.url)}}" />\n                </li>\n            </ul>\n            <div class="nx-preloader distress-list-preloader" ng-show="isDistressLoaded">\n                <div class="preloader-center">\n                    <img class="nx-pre-loader" src="assets/images/preloader.svg" />\n                    <span>\n                        <translate text-value="Loading Distress List">\n                        </translate>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>\n    \x3c!-- <div class="pane-footer">\n        <div class="loadBtn text-center" ng-show="isLoadMore">\n            <img ng-show="isLoad" class="nx-pre-loader" src="assets/images/preloader.svg" />\n            <button class="btn btn-link btn-sm text-dark" ng-click="loadMoreEffects()" type="button">\n                <translate text-value="Load More">\n                </translate>\n            </button>\n        </div>\n    </div> --\x3e\n</div>');