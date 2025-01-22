/**
 * @name Select Disable Layers
 * @version 2.0
 * @author Kyle Martinez <www.kyle-martinez.com>
 *
 * @description Select any unlocked layer in the current composition that is disabled.
 *
 * @license This script is provided "as is," without warranty of any kind, expressed or implied. In
 * no event shall the author be held liable for any damages arising in any way from the use of this
 * script.
 *
 * I'm just trying to help make life as an After Effects animator a little easier.
 */

(function selectDisabledLayers() {
    var comp = app.project.activeItem;
    var layers = comp.layers;
    for (var l = comp.numLayers; l > 0; l--) {
        var layer = layers[l];
        if (!layer.locked) {
            layer.selected = !layer.enabled;
        }
    }
})();