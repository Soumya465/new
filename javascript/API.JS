//---------------------------------------API----------------------------------------------------------
      fetch('https://dummyjson.com/recipes')

.then((res)=>{
           // console.log('heee');
             return res.json()
            
        
         }).then((data)=>{
           console.log(data);
            //  data.map((a)=>{
            //     console.log(a);
            //  })
        
          })
        
        
       
              .catch((err)=>{
                      console.log('errrrrr');
                
        
             })