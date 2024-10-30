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
