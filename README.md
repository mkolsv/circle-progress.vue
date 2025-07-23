# Welcome to circle-progress.vue! 

![Circle Progress Bar](https://drive.usercontent.google.com/download?id=1uKk5IFzb4cSR8_Dv4MN2-4mRoVr0_csd)

Hi! 
Highly customizable & lightweight & responsive circular progressbar component for Vue 3, built with SVG and extensively customizable.

## Installation

```
npm install --save circle-progress.vue
```
## Adding into app

```
import { CircleProgressBar } from 'circle-progress.vue';

<CircleProgressBar :value="7" :max="10" />
```

## Props

Please write me, if you need more props :)
You can customize your progress bars as you want. For example:

| Props             | Type             | Description                                                              | Default        |
|-------------------|------------------|--------------------------------------------------------------------------|----------------|
| max*              | `Number`         | Max value                                                                | - `(required)` |
| value*            | `Number`         | Current value                                                            | - `(required)` |
| size              | `Number, String` | Size of the circle                                                       | `'124'`        |
| colorFilled       | `String`         | Circle color if limit exceed                                             | `'#FF5533'`    |
| colorUnfilled     | `String`         | Circle color if limit not exceed                                         | `'#3BB44A'`    |
| colorBack         | `String`         | Back circle color                                                        | `'#ECEEF1'`    |
| percentage        | `BooleaN`        | Show percentage                                                          | `false`        |
| rounded           | `BooleaN`        | Rounding the circle line                                                 | `false`        |
| animationDuration | `String`         | Animation Duration                                                       | `'0.5s'`       |
| strokeWidth       | `String`         | Circle Stroke width                                                      | `'5px'`        |
| strokeWidthUnfilled | `String`       | Unfilled circle stroke width (if not provided, uses strokeWidth)        | `'20px'`       |
| reversedFilling   | `Boolean`        | Enable reversed filling                                                  | `false`        |
| startAngle        | `Number`         | Allowing to specify an angle in degrees where the fill should begin | `180`          |

## Other

Also you can use slots to throw your custom content. For example:

```
<CircleProgressBar  
  :value="20"  
  :max="80"  
  percentage  
 rounded>
{{ value }} / {{ max }}
</CircleProgressBar>
```

## Support the Project

If you find this component helpful, consider supporting its development! ☕

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-☕-orange?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://coff.ee/mkolsv)

Your support helps keep this project alive and continuously improved! 🚀