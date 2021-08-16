<?php
/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace app\assets;

use yii\web\AssetBundle;

/**
 * Main application asset bundle.
 *
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/app.52aede2c.css',
    ];
    public $js = [
        'js/app.bfc52100.js',
        'js/chunk-vendors.95023c8e.js'
    ];
    public $depends = [
        'yii\web\YiiAsset',
    ];
}
