<?php

class AnnalynsInfiltration
{
    public function canFastAttack($is_knight_awake)
    {
        return !$is_knight_awake;
    }

    public function canSpy(
        $is_knight_awake,
        $is_archer_awake,
        $is_prisoner_awake
    ) {
        $group = array($is_knight_awake, $is_archer_awake, $is_prisoner_awake);

        return in_array(true, $group);
    }

    public function canSignal(
        $is_archer_awake,
        $is_prisoner_awake
    ) {
        throw new \BadFunctionCallException("Implement the function");
    }

    public function canLiberate(
        $is_knight_awake,
        $is_archer_awake,
        $is_prisoner_awake,
        $is_dog_present
    ) {
        throw new \BadFunctionCallException("Implement the function");
    }
}
