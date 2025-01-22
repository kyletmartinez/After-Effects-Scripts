# After Effects Scripts

A collection of helpful workflow scripts for After Effects that either run natively right from the After Effects menu or partner well with 3rd party tools from [aescripts + aeplugins](https://aescripts.com/) such as [KBar3](https://aescripts.com/kbar/), [Tool Launcher](https://aescripts.com/tool-launcher/), [Quick Menu 3](https://aescripts.com/quick-menu/).

I also have a free tool for After Effects called [Atheneum](https://github.com/kyletmartinez/atheneum-for-after-effects) which I personally use with this script collection.

To run a script natively in After Effects use `File > Script > Run Script File...` and choose the script.

## Scripts

#### [Add 3D Break (v2.0)](/scripts/Add%203D%20Break.jsx)

Add an adjustment layer above the currently selected layer to break the 3D space of
After Effects. If no layers are selected the adjustment layer will be added at the top.

#### [Add Camera With Controller (v2.0)](/scripts/Add%20Camera%20With%20Controller.jsx)

Add a camera and 3D null as a controller to the current composition.

#### [Add Composition Guide (v2.0)](/scripts/Add%20Composition%20Guide.jsx)

Add a 16x9 fuscia rectangle shape layer to act as a guide. Helpful with things like
precomposed character rigs.

#### [Add Fill With Color Cycle (v2.0)](/scripts/Add%20Fill%20With%20Color%20Cycle.jsx)

Add the Fill effect to all selected layers while cycling through `red`, `green`,`blue`, `yellow`, `magenta`, and `cyan`.

#### [Add Markers At Out Points (v2.0)](/scripts/Add%20Markers%20At%20Out%20Points.jsx)

Add a composition marker at the out point of each layer in the composition.

#### [Add Markers to Selected Layers (v2.0)](/scripts/Add%20Markers%20to%20Selected%20Layers.jsx)

Add a marker to all selected layers with an optional comment.

#### [Add Posterize Time Adjustment Layer (v2.0)](/scripts/Add%20Posterize%20Time%20Adjustment%20Layer.jsx)

Add `Posterize Time` adjustment layer to the current composition. Default `Frame
Rate` will be half the current frame rate.

#### [Add Posterize Time Expression (v2.0)](/scripts/Add%20Posterize%20Time%20Expression.jsx)

Add `posterizeTime(fps)` expression to all selected properties. Default `fps` will
be half the current frame rate and existing expressions will be preserved.

#### [Add Properties To Essential Graphics (v2.0)](/scripts/Add%20Properties%20To%20Essential%20Graphics.jsx)

Add all selected properties to Essential Graphics Panel. If any properties belong to
a native After Effects expression controller then use the effect name instead.

* `Angle Control`
* `Checkbox Control`
* `Color Control`
* `Dropdown Menu Control`
* `Layer Control`
* `Point Control`
* `Slider Control`

#### [Add Visibility Controller (v2.0)](/scripts/Add%20Visibility%20Controller.jsx)

Add a checkbox that controls the visibility, using opacity, for a selected layer.

#### [Calculate Difference Between Keyframe Values (v1.0)](/scripts/Calculate%20Difference%20Between%20Keyframe%20Values.jsx)

Calculate the difference between two keyframe values.

#### [Calculate Distance Between Layers (v1.1)](/scripts/Calculate%20Distance%20Between%20Layers.jsx)

Calculate the distance between any two layers. Two 2D layers will result in 2D
distance (composition space). Two 3D layers will result in 3D distance (world space). One 2D
layer and one 3D layer will result in 3D distance (world space). Hold the ALT key to force the
result to be 2D distance (composition space). Forcing 2D distance (composition space) will result
in the optical distance between two layers.

#### [Calculate Frames To Selected Keyframe (v2.0)](/scripts/Calculate%20Frames%20To%20Selected%20Keyframe.jsx)

Calculate and alert the amount of time, in frames instead of seconds, between the
currently selected keyframe and the Current Time Indicator.

#### [Center Composition (v2.0)](/scripts/Center%20Composition.jsx)

Center the composition in the Composition Panel. Hold the `ALT` key or `SHIFT` key
for other values.

#### [Change Nested Composition Background (v2.0)](/scripts/Change%20Nested%20Composition%20Background.jsx)

Change the background color of the current composition and all nested compositions.

#### [Change Nested Composition Duration (v2.0)](/scripts/Change%20Nested%20Composition%20Duration.jsx)

Change the duration of the current composition and all nested compositions.

#### [Change Nested Composition Frame Rate (v2.0)](/scripts/Change%20Nested%20Composition%20Frame%20Rate.jsx)

Change the frame rate of the current composition and all nested compositions.

#### [Clean Render Queue (v2.0)](/scripts/Clean%20Render%20Queue.jsx)

Clean out the Render Queue.

#### [Clean Selected Folders (v1.3)](/scripts/Clean%20Selected%20Folders.jsx)

Clean unused items from any selected folders. Remove empty folders unless they are
top level.

#### [Copy Composition Markers To Layer (v2.0)](/scripts/Copy%20Composition%20Markers%20To%20Layer.jsx)

Copy all markers from the current composition to the currently selected layer
including duration, comments, and labels.

Sister script to: `Copy Layer Makers to Composition.jsx`

#### [Copy Layer Makers To Composition (v2.0)](/scripts/Copy%20Layer%20Makers%20To%20Composition.jsx)

Copy all markers from the currently selected layer to the current composition
including duration, comments, and labels.

Sister script to: `Copy Composition Markers To Layer.jsx`

#### [Create Text Layers From File (v2.0)](/scripts/Create%20Text%20Layers%20From%20File.jsx)

Add a Text Layer to the current composition for each line in the selected text file.

#### [Cycle Composition Background Color (v2.0)](/scripts/Cycle%20Composition%20Background%20Color.jsx)

Cycle the composition background color between `black`, `gray`, and `white`.

#### [Toggle Specific Effects (v2.0)](/scripts/Toggle%20Specific%20Effects.jsx)

Disable all specified effects in the current project. Hold the `ALT` key to enable.
Add additional effects to be checked to the `MatchNames` object.

#### [Duplicate Selected Layer (v2.0)](/scripts/Duplicate%20Selected%20Layer.jsx)

Duplicate the selected layer exactly like pressing `CMD/CTRL + D` but move the new
layer directly below the selected layer instead of above it.

#### [Export Path Points (v2.0)](/scripts/Export%20Path%20Points.jsx)

Export path points for the select path property to a text file on the desktop.

#### [Expose Essential Properties to Essential Graphics Panel (v1.1)](/scripts/Expose%20Essential%20Properties%20to%20Essential%20Graphics%20Panel.jsx)

Essential Properties from a nested composition can not be directly added to the
Essential Graphic Panel of the parent composition. Instead, run this script to expose those
Essential Properties by using an intermediate expression controller. Select a layer to add all
properterties or select specific properties to add them. This script does not currently support
Dropdown Menu Control.

#### [Find Specific Effect (v2.0)](/scripts/Find%20Specific%20Effect.jsx)

Find all instances of a specific efffect in the current project. Add additional
effects to be checked to the `MatchNames` object.

#### [Fix Fresh Pickwhip Expression (v1.1)](/scripts/Fix%20Fresh%20Pickwhip%20Expression.jsx)

Append `.value;` to the end of an expression recently set with the pickwhip.

#### [Force Composition Panel Refresh (v2.0)](/scripts/Force%20Composition%20Panel%20Refresh.jsx)

Force the Composition Panel to refresh the current frame.

#### [Hard Solo Layers (v2.0)](/scripts/Hard%20Solo%20Layers.jsx)

Disable all selected layers.

#### [Increment Composition Versions (v2.0)](/scripts/Increment%20Composition%20Versions.jsx)

Increment any version numbers found in the name of all compositions in the current
project.

#### [Invert Selected Keyframes (v2.0)](/scripts/Invert%20Selected%20Keyframes.jsx)

Invert selected keyframe values.

#### [Lock All Layers (v2.0)](/scripts/Lock%20All%20Layers.jsx)

Lock all layers in all conmpositions in the current project.

#### [Make Hold Keyframes (v2.0)](/scripts/Make%20Hold%20Keyframes.jsx)

Convert selected keyframes into hold keyframes.

#### [Match Selected In Point To Below (v2.0)](/scripts/Match%20Selected%20In%20Point%20To%20Below.jsx)

Match the in point of all selected layers to the layer directly below it.

#### [Match Selected Start Time To Below (v2.0)](/scripts/Match%20Selected%20Start%20Time%20To%20Below.jsx)

Match the start time of all selected layers to the layer directly below it.

#### [Merge Imported Selected Items (v2.0)](/scripts/Merge%20Imported%20Selected%20Items.jsx)

Merge all imported and selected items in a previously existing and matching folder.

#### [Multiply Selected Keyframes (v2.0)](/scripts/Multiply%20Selected%20Keyframes.jsx)

Multiply selected keyframe values by a provided value.

#### [Parent Closest Layers (v2.0)](/scripts/Parent%20Closest%20Layers.jsx)

Parent the closest layer in the composition to each selected layer. Calculations
done in 2D space. Typically used in conjunction with Newton by Motion Botique.

#### [Parent Selected Layers To Layers Below (v2.0)](/scripts/Parent%20Selected%20Layers%20To%20Layers%20Below.jsx)

Parent each selected layer to the layer directly below it.

#### [Posterize Keyframes (v1.1)](/scripts/Posterize%20Keyframes.jsx)

Posterize all selected keyframes in a composition to be on 2s.

#### [Posterize Layer Start Time (v2.0)](/scripts/Posterize%20Layer%20Start%20Time.jsx)

Posterize the start time of all layers in a composition to be on 2s.

#### [Randomize Layer Start Time (v1.3)](/scripts/Randomize%20Layer%20Start%20Time.jsx)

Randomly shift the start time of all selected layers within a provided range.

#### [Remove All Proxies (v2.0)](/scripts/Remove%20All%20Proxies.jsx)

Remove all proxies within the current project.

#### [Rename Composition To File Name (v2.0)](/scripts/Rename%20Composition%20To%20File%20Name.jsx)

Rename the composition to match the name of the project file.

#### [Rename Puppet Pins For DuIK (v2.0)](/scripts/Rename%20Puppet%20Pins%20For%20DuIK.jsx)

Rename selected arm puppet pins in preparation for DuIK. Hold the `ALT` key to
rename selected leg puppet pins.

#### [Rename Selected Layer Source (v2.0)](/scripts/Rename%20Selected%20Layer%20Source.jsx)

Rename the source of the currently selected layer.

#### [Rename Selected Layers With Letters (v2.0)](/scripts/Rename%20Selected%20Layers%20With%20Letters.jsx)

Rename the selected layers append letters as needed.

#### [Rename Selected Layers With Numbers (v2.0)](/scripts/Rename%20Selected%20Layers%20With%20Numbers.jsx)

Rename the selected layers appending zero-padded numbers as needed.

#### [Rename Selected Layers With Text (v2.0)](/scripts/Rename%20Selected%20Layers%20With%20Text.jsx)

Rename the selected layers appending each character and character count as needed.

#### [Rename Selected Project Items (v2.0)](/scripts/Rename%20Selected%20Project%20Items.jsx)

Rename selected project items appending zero-padded numbers as needed.

#### [Rename Source To Layer Name (v2.0)](/scripts/Rename%20Source%20To%20Layer%20Name.jsx)

Rename the selected item to match the name of the layer it is used for.

#### [Replace Text in Project Item Name (v2.0)](/scripts/Replace%20Text%20in%20Project%20Item%20Name.jsx)

Replace text in the name of all selected project items. RegEx is accepted.

#### [Reset Composition Work Area (v2.0)](/scripts/Reset%20Composition%20Work%20Area.jsx)

Set the Work Area to cover the entire composition.

#### [Round Selected Keyframe Values (v2.0)](/scripts/Round%20Selected%20Keyframe%20Values.jsx)

Round the values for all selected keyframes to the nearest whole number. Currently
supports basic properties with 1, 2, or 3 dimensions.

#### [Round Selected Property Values (v2.0)](/scripts/Round%20Selected%20Property%20Values.jsx)

Round the values for all selected properties to the nearest whole number. Currently
supports basic properties with 1, 2, or 3 dimensions.

#### [Save Frame As PNG (v2.0)](/scripts/Save%20Frame%20As%20PNG.jsx)

Save the current frame as a PNG to the desktop. Output will match the following
format:

`Composition Name YYYY-MM-DD HH.MM.SS AM.png`

#### [Select All Children (v2.0)](/scripts/Select%20All%20Children.jsx)

Select any unlocked layer parented to the selected layer in the current composition.

#### [Select Disable Layers (v2.0)](/scripts/Select%20Disable%20Layers.jsx)

Select any unlocked layer in the current composition that is disabled.

#### [Select Layers Below Label (v2.0)](/scripts/Select%20Layers%20Below%20Label.jsx)

Select all layers in the current composition that are directly below a layer with
the label color `16`. In my preferences label 16 is Black `#000000` and is always used for track
mattes.

#### [Select Non-Null Layers (v2.0)](/scripts/Select%20Non-Null%20Layers.jsx)

Select any unlocked layer in the current composition not created as a null object.

#### [Select Parent Layer (v2.0)](/scripts/Select%20Parent%20Layer.jsx)

Select the parent of the currently selected layer.

#### [Select Random Layers (v2.0)](/scripts/Select%20Random%20Layers.jsx)

Randomly select any unlocked layer in the current composition.

#### [Select Unparented Layers (v2.0)](/scripts/Select%20Unparented%20Layers.jsx)

Select any unlocked layer in the current composition without a parent.

#### [Set All Item Labels To None (v2.0)](/scripts/Set%20All%20Item%20Labels%20To%20None.jsx)

Set the label for all items in the current project to `None` or label `0`.

#### [Set All Layer Labels To None (v2.0)](/scripts/Set%20All%20Layer%20Labels%20To%20None.jsx)

Set the label for all layers in the current composition to `None` or label `0`.

#### [Set All Track Matte Labels (v2.0)](/scripts/Set%20All%20Track%20Matte%20Labels.jsx)

Set the label color for all track matte layers in the active composition to `16`. In
my preferences label 16 is Black `#000000` and is always used for track mattes.

#### [Set New Color (v2.0)](/scripts/Set%20New%20Color.jsx)

Select a color property and set a new color based on the original color, blend mode,
and opacity. Colors are calculated using the After Effects order of operations. Supports the
following blend modes:

* `Multiply`
* `Screen`

#### [Set Proxies From Folder (v2.0)](/scripts/Set%20Proxies%20From%20Folder.jsx)

Set proxies for all compositions within the project.

#### [Set Simple Time Remap Loop (v2.0)](/scripts/Set%20Simple%20Time%20Remap%20Loop.jsx)

Automatically enable Time Remapping, set the appropriate keyframes, and apply the
`loopOut()` expression to correctly loop a layer.

#### [Set To Average Position (v1.1)](/scripts/Set%20To%20Average%20Position.jsx)

Set the last selected layer to the average position of all other layers. Hold the
ALT key to set the first selected layers to the average position of all other layers.

#### [Set Track Matte To Above (v2.0)](/scripts/Set%20Track%20Matte%20To%20Above.jsx)

Set the track matte for all selected layers to the layer above it.

* `TrackMatteType.ALPHA`
* `TrackMatteType.ALPHA_INVERTED`
* `TrackMatteType.LUMA`
* `TrackMatteType.LUMA_INVERTED`
* `TrackMatteType.NO_TRACK_MATTE`

#### [Shift Layer Start Time (v2.0)](/scripts/Shift%20Layer%20Start%20Time.jsx)

Shift the start of a group of selected layers to the current time while maintaining
relative timing within the group.

#### [Stick Effect To Layer (v2.0)](/scripts/Stick%20Effect%20To%20Layer.jsx)

Help effects with position properties such as `CC Bend It` or `Gradient Ramp` stick
properly to a layer.

#### [Swap Property Values (v2.0)](/scripts/Swap%20Property%20Values.jsx)

Swap the values of two selected properties with the same property type.

#### [Swap Property Dimensions (v2.0)](/scripts/Swap%20Property%20Dimensions.jsx)

Swap the dimension values for all selected properties. For example, swap the x and y
size values for a rectangle shape layer.

#### [Toggle Difference Blend Mode (v2.0)](/scripts/Toggle%20Difference%20Blend%20Mode.jsx)

Toggle the blend mode of the selected layers to `Difference`. Hold the `ALT` key to
toggle back to `Normal`.

#### [Toggle Maintain Scale Expression (v1.0)](/scripts/Toggle%20Maintain%20Scale%20Expression.jsx)

Disable or enable an expression that maintains the visual scale of a layer as it's
positioned in Z Space.

#### [Toggle Onion Skinning (v1.3)](/scripts/Toggle%20Onion%20Skinning.jsx)

Toggle onion skinning in the current composition.

#### [Toggle Puppet Pin Types (v2.0)](/scripts/Toggle%20Puppet%20Pin%20Types.jsx)

Toggle the types of selected puppet pins between `Position` and `Advanced`.

#### [Transfer Composition Work Area (v2.0)](/scripts/Transfer%20Composition%20Work%20Area.jsx)

Copy the Work Area from the current composition. Hold the `ALT` key to paste a
copied Work Area to the current composition.

#### [Unlock All Layers (v2.0)](/scripts/Unlock%20All%20Layers.jsx)

Unlock all layers in all conmpositions in the current project.

#### [Zero Position (v2.0)](/scripts/Zero%20Position.jsx)

Zero out the position of all selected layers.

