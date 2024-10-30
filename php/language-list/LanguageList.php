<?php

function language_list(...$languages)
{
    return [...$languages];
}

function add_to_language_list($languages, $new_language)
{
    $languages[] = $new_language;

    return $languages;
}

function prune_language_list($language_list)
{
    return array_splice($language_list, 1);
}
