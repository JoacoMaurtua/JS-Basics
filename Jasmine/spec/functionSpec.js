//Ejercicio 1
//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255

/*function SumtoN(num) {
  sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}


//TEST 1
describe('SumtoN', function () {
  it('Deberia retornar 6, cuando le paso como argumento 3', function () {
    //CASE1
    expect(SumtoN(3)).toEqual(6);
  });

  it('Deberia retornar 3, cuando le paso como argumento 2', function () {
    //CASE 2
    expect(SumtoN(2)).toEqual(3);
  });

  it('Deberia retornar 32640, cuando le paso como argumento 255', function () {
    //CASE 3
    expect(SumtoN(255)).toEqual(32640);
  });
});

//Ejercicio 2

function reverseArray(arr){ 
  for(var i=0; i<arr.length/2; i++) { 
      temp = arr[arr.length-i-1]; 
      arr[arr.length-i-1] = arr[i]; 
      arr[i] = temp; 
  } 
  return arr; 
} 
b = reverseArray([1,2,3]); 
console.log('b is', b); 

//TEST 1
describe("reverseArray", function() { 
  it("should return [5,3,1] when [1,3,5] is passed", function() { 
      expect(reverseArray([1,3,5])).toEqual([5,3,1]); 
  }); 
  it("should return [2,4,8,1] when [1,8,4,2] is passed", function() { 
      expect(reverseArray([2,4,8,1])).toEqual([1,8,4,2]); 
  }); 
});

//Ejercicio 3
/*crea una prueba o función que devuelva la suma del número más grande y el más pequeño del array. 
Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10]) 
debería devolver -2 + -10 = -12. */

function sumMaxMin(arr){
  max = min = arr[0];
  for(let i = 0; i<arr.length; i++){
    if(arr[i]>max) {max = arr[i]};
    if (arr[i]<min) {min = arr[i]};
  }
  
  return max+min;
}


describe("sumMaxMin",function(){
  it("Deberia retornar 11, cuando le pase como argumento [1,3,10]",function(){
    expect(sumMaxMin([1,3,10])).toEqual(11);
  })
  it("Deberia retornar -12, cuando le pase como argumento [-2,-5,-10]",function(){
    expect(sumMaxMin([-2,-5,-10])).toEqual(-12);
  })

});