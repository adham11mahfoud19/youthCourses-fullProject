<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\CoursesRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class CoursesCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class CoursesCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Courses::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/courses');
        CRUD::setEntityNameStrings('courses', 'courses');
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        Crud::column([
            'name' => 'title',
            'label' => 'Course Title',
            'type' => 'text'
        ]);
        Crud::column([
            'name' => 'author',
            'label' => 'Course Author',
            'type' => 'text'
        ]);
        /**
         * Columns can be defined using the fluent syntax:
         * - CRUD::column('price')->type('number');
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(CoursesRequest::class);
        CRUD::field('title')->type('text');
        CRUD::field('author')->type('text');
        CRUD::field([  // Select
            'label'     => "Chapter1",
            'type'      => 'select',
            'name'      => 'chapter1', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter2",
            'type'      => 'select',
            'name'      => 'chapter2', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter3",
            'type'      => 'select',
            'name'      => 'chapter3', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter4",
            'type'      => 'select',
            'name'      => 'chapter4', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter5",
            'type'      => 'select',
            'name'      => 'chapter5', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter6",
            'type'      => 'select',
            'name'      => 'chapter6', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter7",
            'type'      => 'select',
            'name'      => 'chapter7', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter8",
            'type'      => 'select',
            'name'      => 'chapter8', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter9",
            'type'      => 'select',
            'name'      => 'chapter9', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter10",
            'type'      => 'select',
            'name'      => 'chapter10', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter11",
            'type'      => 'select',
            'name'      => 'chapter11', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter12",
            'type'      => 'select',
            'name'      => 'chapter12', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter13",
            'type'      => 'select',
            'name'      => 'chapter13', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter14",
            'type'      => 'select',
            'name'      => 'chapter14', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter15",
            'type'      => 'select',
            'name'      => 'chapter15', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]); CRUD::field([  // Select
            'label'     => "Chapter16",
            'type'      => 'select',
            'name'      => 'chapter16', // the db column for the foreign key
         
            // optional
            // 'entity' should point to the method that defines the relationship in your Model
            // defining entity will make Backpack guess 'model' and 'attribute'
            'entity'    => 'chapter',
         
            // optional - manually specify the related model and attribute
            'model'     => "App\Models\Chapter", // related model
            'attribute' => 'title',
            'pivot' => true
        ]);
        /**
         * Fields can be defined using the fluent syntax:
         * - CRUD::field('price')->type('number');
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
