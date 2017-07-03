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
 
 exports.radixSort = function(inputArray,base) {
  if(!inputArray) return -1;
  if(inputArray.length === undefined) return -1;

  var arrlen = inputArray.length;
  return exports.rs(inputArray,arrlen,base);
}

    // A utility function to get maximum value in arr[]
    exports.getMax  = function(arr,n)
    {
        var mx = arr[0];
        for (i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
    }

    // A utility function to calculate index value from digitPlace and base
    exports.getDigit = function(value, digitPlace, base){
            return (Math.floor((value/digitPlace ) % base));
        }

    // A function to do counting sort of arr[] according to
    // the digit represented by exp.
    exports.cs = function(arr,n,exp,base) {

      var output = [n];
      var count = [base], i;
       // set all elemt to zero memset(count, 0, base*sizeof(unsigned));
       for (i = 0; i < 10; i++)
            count[i] = 0 ;
            
      // count occurrence of each element 
      for (i = 0; i < n; i++) {
          var index_i = exports.getDigit(arr[i], exp, base); // Math.floor
          count[index_i]++;

      }
 
      // rearrange count[] so that it contains actual position of
      // each element in output[] 
      for (i = 1; i < base; i++)
          count[i] += count[i-1];
      
      // NOTE: filling the output array in a reversed way 
      for (i = n-1; i >= 0 ; i--){
              var index_i = exports.getDigit(arr[i], exp, base); //Math.floor
              output[--count[index_i]] = arr[i];
          }
 
      // copy output[] into arr[] 
      for (i = 0; i < n; i++) {
             arr[i] = output[i];
          }
          
    return arr; 

    }


    // The main function to that sorts arr[] of size n using
    // Radix Sort
    exports.rs = function(arr,n,base)
    {
        // Find the maximum number to know number of digits
        var m = exports.getMax(arr,n);
        //var base = 10;  // 10 for decimal , 16 for HEX and 2 for binary 

        // Do counting sort for every digit. Note that instead
        // of passing digit number, place is passed. place is base^i
        // where i is current digit number
        for(place=1; place <= m; place *= 10){
            // Use counting sort at each digit's place
            arr = exports.cs(arr, n , place , base);
            //console.log(arr);   
        }

      return arr;
    }
   
