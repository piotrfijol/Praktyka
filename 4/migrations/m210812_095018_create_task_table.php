<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%task}}`.
 */
class m210812_095018_create_task_table extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable('{{%task}}', [
            'id' => $this->primaryKey(),
            'title' => $this->string(),
            'created_at' => $this->dateTime()->notNull(),
            'is_done' => $this->boolean()->notNull(),
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%task}}');
    }
}
