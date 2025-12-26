<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTodoRequest extends FormRequest
{
    // Allow all users for now
    public function authorize(): bool
    {
        return true;
    }

    // Validation rules
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'duration' => 'required|integer|min:1',
        ];
    }

    // Optional: custom error messages
    public function messages(): array
    {
        return [
            'title.required' => 'Please provide a title for your todo.',
            'duration.required' => 'Please provide a duration for the todo.',
            'duration.integer' => 'Duration must be a number.',
            'duration.min' => 'Duration must be at least 1.',
        ];
    }
}
