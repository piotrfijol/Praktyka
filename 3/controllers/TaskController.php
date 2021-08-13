<?php

namespace app\controllers;

use yii\rest\ActiveController;



class TaskController extends ActiveController {
    
    public $modelClass = 'app\models\Task';

    public function behaviors()
    {
        $behaviors = parent::behaviors();

        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);

        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Origin' => ['http://localhost:8081'],
                'Access-Control-Request-Method' => ['GET', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
                'Access-Control-Request-Headers' => ['*'],
                'Access-Control-Expose-Headers' => ['x-pagination-current-page', 'x-pagination-page-count', 'x-pagination-per-page', 'x-pagination-total-count'],
                'Access-Control-Allow-Headers' => ['*'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 1,
            ]
        ];

        $behaviors['authenticator'] = $auth;
        $behaviors['authenticator']['except'] = ['options'];

        return $behaviors;
    }
}