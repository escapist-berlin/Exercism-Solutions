<?php

class PizzaPi
{
    public function calculateDoughRequirement($numOfPizzas, $numbOfPersons)
    {
        return $numOfPizzas * (($numbOfPersons * 20) + 200);
    }

    public function calculateSauceRequirement($numOfPizzas, $sauceCanVolume)
    {
        return $numOfPizzas * 125 / $sauceCanVolume;
    }

    public function calculateCheeseCubeCoverage()
    {
        throw new \BadFunctionCallException("Implement the function");
    }

    public function calculateLeftOverSlices()
    {
        throw new \BadFunctionCallException("Implement the function");
    }
}
