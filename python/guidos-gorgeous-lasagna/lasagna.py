"""Functions used in preparing Guido's gorgeous lasagna.

Learn about Guido, the creator of the Python language:
https://en.wikipedia.org/wiki/Guido_van_Rossum

This is a module docstring, used to describe the functionality
of a module and its functions and/or classes.
"""


EXPECTED_BAKE_TIME = 40

def bake_time_remaining(time_elapsed):
    """Calculate the bake time remaining.

    :param elapsed_bake_time: int - baking time already elapsed.
    :return: int - remaining bake time (in minutes) derived from 'EXPECTED_BAKE_TIME'.

    Function that takes the actual minutes the lasagna has been in the oven as
    an argument and returns how many minutes the lasagna still needs to bake
    based on the `EXPECTED_BAKE_TIME`.
    """
    elapsed_bake_time = EXPECTED_BAKE_TIME - time_elapsed
    return elapsed_bake_time

def preparation_time_in_minutes(number_of_layers):
    """Calculate the prep time in munutes.

    :param number_of_layers * 2 - prep time.
    :return: number_of_layers * 2.

    Function that returns prep time for given number of layers.
    """
    return number_of_layers * 2


def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """Calculate the elapsed time in munutes.

    :param preparation_time_in_minutes(number_of_layers) - prep time.
    :return: preparation_time_in_minutes(number_of_layers) + elapsed_bake_time.

    Function that returns total elapsed time.
    """
    return preparation_time_in_minutes(number_of_layers) + elapsed_bake_time