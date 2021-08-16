<?php

namespace app\models;

use Yii;
use yii\filters\auth\HttpBasicAuth;

/**
 * This is the model class for table "task".
 *
 * @property int $id
 * @property string|null $title
 * @property string $created_at
 * @property int $is_done
 */
class Task extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */

    public static function tableName()
    {
        return 'task';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['created_at', 'is_done'], 'required'],
            [['created_at'], 'safe'],
            [['is_done'], 'integer'],
            [['title'], 'string', 'max' => 255],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'created_at' => 'Created At',
            'is_done' => 'Is Done',
        ];
    }
}