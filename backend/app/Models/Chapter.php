<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chapter extends Model
{
    use CrudTrait;
    use HasFactory;
    protected $fillable = [
        'title',
        'desc',
        'video1',
        'video2',
        'video3',
        'video4',
        'video5',
        'video6',
        'video7',
        'video8',
        'video9',
        'video10',
        'video11',
        'video12',
        'video13',
        'video14',
        'video15',
        'video16',
    ];
    public function course() {
        return $this->belongsTo(Courses::class);
    }
}
