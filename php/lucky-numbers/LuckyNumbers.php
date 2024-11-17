<?php

class LuckyNumbers
{
    public function sumUp(array $digitsOfNumber1, array $digitsOfNumber2): int
    {
        $firstValue = implode("", $digitsOfNumber1);
        $secondValue = implode("", $digitsOfNumber2);

        return (int) $firstValue + (int) $secondValue;
    }

    public function isPalindrome(int $number): bool
    {
        $stringNum = (string) $number;

        return strrev($stringNum) === $stringNum;
    }

    public function validate(string $input): string
    {
        if ($input == '')
        {
            return 'Required field';
        }

        if ((int) $input <= 0)
        {
            return 'Must be a whole number larger than 0';
        }

        return '';
    }
}
