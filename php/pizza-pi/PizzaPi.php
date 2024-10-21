<?php

class PizzaPi
{
    public function calculateDoughRequirement($numOfPizzas, $numbOfPersons)
    {
        return $numOfPizzas * (($numbOfPersons * 20) + 200);
    }

    public function calculateSauceRequirement($numOfPizzas, $sauceCanVolume)
    {
        return ($numOfPizzas * 125) / $sauceCanVolume;
    }

    public function calculateCheeseCubeCoverage($cheeseDimension, $thickness, $diameter)
    {
        return floor(($cheeseDimension ** 3) / ($thickness * pi() * $diameter));
    }

    public function calculateLeftOverSlices($numOfPizzas, $numbOfPersons)
    {
        return (8 * $numOfPizzas) % $numbOfPersons;
    }
}
