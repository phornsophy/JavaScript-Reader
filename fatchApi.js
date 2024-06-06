const Base_Url = "https://fakestoreapi.com/";
export async function getData(endpint){
    try{
        const data = await fetch(`${Base_Url}${endpint}`);
        const res = await data.json();
        //console.log(res);
        return res;

    } catch(error){
        console.log("error", error);

    }
} 
