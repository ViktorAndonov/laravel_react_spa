<?php

namespace App\Http\Controllers;

use App\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NoteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $notes = DB::table('notes')
                    ->where('user_id', auth()->guard('api')->user()->id)
                    ->select('id', 'title', 'description', 'created_at', 'updated_at')
                    ->get();

        return $notes;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $valid_attrs = request()->validate([
            'title'         => 'required | min:3 | max:255',
            'description'   => 'required | min:5'
        ]);

        $valid_attrs['user_id'] = auth()->id();

        Note::create($valid_attrs);

        return response()->json('Note created.', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function show(Note $note)
    {
        abort_if($note->user_id !== auth()->id(), 403);

        return $note;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Note $note)
    {
        abort_if($note->user_id !== auth()->id(), 403);

        $valid_attrs = request()->validate([
            'title'         => 'min:3 | max:255',
            'description'   => 'min:5'
        ]);

        $note->update($valid_attrs);

        return response()->json('Note updated.', 202);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Note  $note
     * @return \Illuminate\Http\Response
     */
    public function destroy(Note $note)
    {
        abort_if($note->user_id !== auth()->id(), 403);

        $note->delete();

        return response()->json('Note deleted.', 200);
    }
}
