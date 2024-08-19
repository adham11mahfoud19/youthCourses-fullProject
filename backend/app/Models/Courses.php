<?php
namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Courses extends Model
{
    use CrudTrait;
    protected $fillable = [
        'title',
        'author',
        'videos'
    ];
    protected $casts = [
        'videos' => 'array'
    ];
    use HasFactory;

    public function chapter(){
        return $this->belongsTo(Chapter::class);
    }
}
