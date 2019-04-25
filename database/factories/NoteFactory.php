<?php

use Faker\Generator as Faker;

$factory->define(App\Note::class, function (Faker $faker) {
    return [
        'title' => $faker->text($maxNbChars = 30),
        'description' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        'user_id' => factory(App\User::class)->create()->id,
    ];
});