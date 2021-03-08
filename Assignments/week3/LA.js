const people = [
        {name: 'Mike', age: '12', gender:'male', result:'is not old enough to see movie'}, 
        {name: 'Madeline', age:'80', gender: 'female', result: 'is old enough to see movie'}, 
        {name: 'Cheryl', age:'22', gender:'female', result: 'is old enough to see movie'}, 
        {name: 'Sam', age:'30', gender:'male', result: 'is old enough to see movie'}, 
        {name: 'Suzy', age: '4', gender:'female', result: 'is not old enought to see movie'} ]
        
       
        const peopleOld = people.filter(function(people){             
                return people.age >= 18
              })
              
              
              console.log(people);