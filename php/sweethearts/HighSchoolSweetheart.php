<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return substr($name, 0, 1);
    }

    public function initial(string $name): string
    {
        throw new \BadFunctionCallException("Implement the function");
    }

    public function initials(string $name): string
    {
        throw new \BadFunctionCallException("Implement the function");
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        throw new \BadFunctionCallException("Implement the function");
    }
}
