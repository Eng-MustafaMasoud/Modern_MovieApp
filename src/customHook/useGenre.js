const useGenre=(selected)=>{
    if(selected.length<1) return "";


    const selectedGenreId = selected.map(g=>g.id)
   return selectedGenreId.reduce((acc,curr)=> acc + "," + curr)
  
}
export default useGenre