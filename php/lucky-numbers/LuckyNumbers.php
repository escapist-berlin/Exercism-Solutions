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
        throw new \BadFunctionCallException("Implement the function");
    }

    public function validate(string $input): string
    {
        throw new \BadFunctionCallException("Implement the function");
    }
}
