 /*
 * Radix sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n*k) comparisons, swaps
 * Best-case performance	O(n*k) comparisons, O(1) swaps
 * Average performance	О(n*k) comparisons, swaps
 * Worst-case space complexity
 *   where k is the length of the longest number and n is the
 *   size of the input array.
 *   Note: if k is greater than log(n) then an n*log(n) algorithm would be a
 *         better fit. In reality we can always change the radix to make k
 *         less than log(n).
 *
 * Author: Pooya Hatami
 */

var rectcs = require('./node-sort-radix');

var arrin01 = [20, 8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, 8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , 390 , 1000 ];
var arrin04 = ['g', 'e', 'e', 'k', 's', 'f', 'o',
                      'r', 'g', 'e', 'e', 'k', 's'];
var arrin05 = [1, 3, 7, 25, 12, 9, 8,
                      121, 221, 10, 18, 29, 49];
var arrin06 = [1, 3, -7, 25, 12, 9, 8,
                      121, 221, -10, 18, 29, 49];
var arrin07 = [1, 3, 7000000000000000000, 25, 12, 9, 8,
                      121, 221, 100000000000000000000000000 , 18, 290000000000000000000, 49];
var arrin07 = [1, 3, 75432, 25, 12, 9, 8,
                      121, 221, 976562 , 18, 2900000, 49];
//var arrin08 = [A7,02,22,77,37,15,00,40,B00,75,04,05,07,75,52,12,50,77,71,D07];
var arrin09 = [1001,101010,11,10,01,111,100,1000,11100,10110,101,100010,0111,101,11111,1000001,1,0,111,11010];
var arrin10 = [7,2,22,77,37,15,10770,740,70,75,04,5,107,75,52,12,50,177,71,207];

function solveRS(arr,base) {
    var arr_original = arr.toString() ;
    var result = rectcs.radixSort(arr,base);
    if (result==-1){
    console.log("Fail attempt to sort array \r\n  ["+arr_original+" ] by Insertion Sort " );
    } else {
    console.log("Success attempt to sort array \r\n \t ["+arr_original+" ] \r\n and result is : \r\n \t [ "
                + result + " ]" );
    }
   
   console.log("----------------------------------------------------------");     
}

solveRS(arrin01,10);
solveRS(arrin05,10);
//solveRS(arrin08,16);
solveRS(arrin09,2);
solveRS(arrin10,8);
