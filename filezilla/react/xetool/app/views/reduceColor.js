GlobaltemplateCache.put("modules/reduceColor/views/view.html",'<div class="imageEdit-adjustment wrapper" ng-controller="ImageReduceColorController" ng-init="init()">\n    \x3c!-- <h5 class="mt-2">\n        <translate text-value="Select number of colors"></translate>\n        </small>\n    </h5> --\x3e\n    <div class="reduce-blank-div" ng-show="isDrawImage"></div>\n    <div class="form-row" >\n        <div class="col">\n            <div class="form-group select-style">\n                <span for=""></span>\n                <select class="form-control form-control-sm custom-select" style="width: 200px;" ng-change="\n                changeColorFromStage(colorValue)" ng-init="colorValue = reduceColorList[8]" ng-model="colorValue" ng-options="colorValue.name for colorValue in reduceColorList">\n                </select>\n            </div>\n        </div>\n        \x3c!-- <div class="col">\n            <input class="dragger" type="range" min="1" max="9" ng-change="reduceColorsFromImage(colorRangeValue)" ng-model="colorRangeValue">\n        </div> --\x3e\n    </div>\n    <span class="text-danger text-xs" ng-show="isAvailable">\n        <translate text-value="Colors Not Matched"></translate>\n    </span>\n    <div class="imageEdit_reduced_colors" ng-show="isColorVisible">\n        <xe-color-picker change-class="validateColorPicker(color)" categories="categoryData" class="picker-align pull-left m-r-xs" color-change="replaceColor(color, value, $index)" colors="colorData" id="imageEdit-reduced-colors-{{$index + 6}}" index-val="$index + 6"\n            initial-color="color" ng-repeat="color in imgColors track by $index" picker-size="{{pickerStyle}}" thumb-size="{{thumbStyle}}" size="sm" allign="bottom" transparent="true">\n        </xe-color-picker>\n    </div>\n</div>');