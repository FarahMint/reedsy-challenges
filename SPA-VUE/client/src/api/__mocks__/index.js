const fakeData=[
    {author:"author-one", title:"title-one" , slug:"slug-one"},
    {author:"author-two", title:"title-two", slug:"slug-two"}
]

export async function getAllBooks() {
   return  await new Promise((resolve)=>{
        resolve(fakeData)
    })
  }