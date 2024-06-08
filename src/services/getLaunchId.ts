export const getLaunchById = async ({id}) =>{
    const url = `https://api.spacexdata.com/v5/launches/${id}`
    const res = await fetch(url)
    const dataById = await res.json()

    console.log({id})
    
    console.log(dataById)

    return dataById
}