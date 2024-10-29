<?php

class ProgramWindow
{
    public $x;
    public $y;
    public $height;
    public $width;

    function __construct($x, $y, $height, $width)
    {
        $this->x = $x;
        $this->y = $y;
        $this->height = $height;
        $this->width = $width;
    }
}
