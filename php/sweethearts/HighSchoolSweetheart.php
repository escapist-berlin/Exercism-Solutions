<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return substr(trim($name), 0, 1);
    }

    public function initial(string $name): string
    {
        $firstLetter = ucfirst($this->firstLetter($name));

        return "$firstLetter.";
    }

    public function initials(string $name): string
    {
        $firstName = $this->initial($name);
        $lastName = $this->initial(strrchr($name, ' '));

        return "$firstName $lastName";
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $first = $this->initials($sweetheart_a);
        $second = $this->initials($sweetheart_b);
        $result = "$first  +  $second";

        return <<<HEART_PAIR
                 ******       ******
               **      **   **      **
             **         ** **         **
            **            *            **
            **                         **
            **     $result     **
             **                       **
               **                   **
                 **               **
                   **           **
                     **       **
                       **   **
                         ***
                          *
            HEART_PAIR;
    }
}
