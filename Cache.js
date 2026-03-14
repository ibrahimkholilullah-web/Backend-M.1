const dateCache = new Map();

const cacheData = (id) =>{
    console.log("Run the expensive task for : ", id);

    return{
        id : id,
        date: `Sum date for id: ${id}`,
        timestamp : new Date().getTime(),

    }
}

const getDate = (id) =>{
  if(dateCache.has(id)){
    console.log(`Cache hit for : ${id} `)
  return dateCache.get(id)
  }
  console.log("Cache Miss for Id: ", id); 
  const date = cacheData(id);
  dateCache.set(id, date)

  return date;
}

console.log(cacheData)
console.log(getDate(123))
console.log(getDate(123))