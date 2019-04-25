<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 50)->create()->each(function ($user) {
            $user->notes()->save(factory(App\Note::class)->make());
        });

        // $this->call(UsersTableSeeder::class);
    }
}
