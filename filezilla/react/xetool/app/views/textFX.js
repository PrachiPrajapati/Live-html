GlobaltemplateCache.put("modules/textFX/views/view.html",'<div class="pane-content" ng-controller="TextFXController" ng-init="init()">\n    <div class="design-list">\n        <div class="design-edit">\n            <div class="textForm">\n                <label class="nxi-form-label">\n                    <translate text-value="Enter Text"></translate>\n                </label>\n                <textarea class="form-control w-full" ng-keyup="onKeyUp()" ng-model="textFXValue" placeholder="{{WriteSomething}}" type="text" ng-show="!isTextEditLockedTextFx" ng-focus="focusOnText()" ng-blur="focusOutText()" rows="2">\n                </textarea>\n                <div class="update-icons">\n                    <button class="btn btn-dark" ng-class="{\'disabled\':disableAddBtn}" ng-click="addTextFX(textFXValue)" type="button" ng-show="isLockedByAdmin && !isTextActive">\n                        <i class="fa fa-plus"></i>\n                    </button>\n                    <button class="btn btn-success" ng-click="UpdateTextFX(textFXValue)" ng-show="isTextActive" type="button">\n                        <i class="fa fa-check"></i>\n                    </button>\n                </div>\n            </div>\n            </div>\n            <label class="nxi-form-label mt-3">\n                <translate text-value="Effects"></translate>:\n            </label>\n            <div class="nx-thumbs textfx-list-thumb">\n                <ul class="pane-scroll" xe-scroll="loadMoreFonts()" load="{{isLoadMore}}" preloader="{{isTextFxLoadedMore}}">\n                    <li class="scroll-items" ng-class="{active:$index == selectedIndex}" ng-repeat="font in FontList">\n                        <div class="d-flex" ng-click="selectedFont($index)">\n                            <img ng-repeat="char in font.displaychar track by $index" ng-src="{{textFXUrl+font.id+\'_\'+char}}.svg">\n                        </div>\n                    </li>\n                </ul>\n                <div class="nx-preloader textFx-list-preloader" ng-show="isTextFxLoaded">\n                    <div class="preloader-center">\n                        <img class="nx-pre-loader" src="assets/images/preloader.svg" />\n                        <span>\n                            <translate text-value="Loading TextFX List">\n                            </translate>\n                        </span>\n                    </div>\n                </div>\n            \x3c!-- <div class="pane-footer">\n                    <div class="loader" ng-show="isLoadMore">\n                        <img ng-show="isLoad" class="nx-pre-loader" src="assets/images/preloader.svg" />\n                        <button class="btn btn-default" ng-click="loadMoreFonts()" type="button">\n                            <translate text-value="Load More"></translate>\n                        </button>\n                    </div>\n                    <div class="text-submit">\n                        <button class="btn btn-dark" ng-class="{\'disabled\':disableAddBtn}" ng-click="addTextFX(textFXValue)" type="button" ng-show="isLockedByAdmin && !isTextActive">\n                            <translate text-value="Add">\n                            </translate>\n                        </button>\n                        <button class="btn btn-success" ng-click="UpdateTextFX(textFXValue)" ng-show="isTextActive" type="button">\n                            <translate text-value="Update">\n                            </translate>\n                        </button>\n                    </div>\n                </div> --\x3e\n                <div class="nx-preloader-loadmore textFx-list-preloader" ng-show="isTextFxLoadedMore">\n                    <div class="preloader-center">\n                        <img class="nx-pre-loader" src="assets/images/preloader.svg" />\n                        <span>\n                            <translate text-value="Loading TextFX List">\n                            </translate>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>');