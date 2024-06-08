export const getLaunches = async () =>{
    const url = 'https://api.spacexdata.com/v5/launches/'
    const res = await fetch(url)
    const data = await res.json()
    const launches = data.slice(0,20)

    console.log(launches)
    return launches
}