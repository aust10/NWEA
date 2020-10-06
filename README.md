# NWEA
A coding challenge to when given a 2D array, flattens it into a 1D array.  Also report out the highest and lowest values found in the source array.

## Process of Development
* What is the data that is inputed in the function?
* What is the data that is to be returned?
* What paramiters are to be met or failed?
* Test.

***

The data to be inputed must be an Array [] that can consist of **Numbers** and **Letters**. It can have nested Arrays [] within the main Array ie. [1,2,[3,4]].

The returned value should display the final 2D Array, Highest number in the array, and Lowest number in the array.

The function can handle whole and float value Numbers. It can also handle strings but only returns Numbers as the High and Low value. 

***

## Development Thoughts

This is solved by the use of recursion in order to optimize the speed of the function by running the function linearly. In this soulution I opted to go with a forEach() loop insted of a for() loop for readability and to reduce the chance of off by one errors. I also opted to use a Object to hold all my values being transformed to give me a local place to look instead of having three different values and converting to return the proper formating. 
