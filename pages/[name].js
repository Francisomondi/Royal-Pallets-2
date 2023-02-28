import { useRouter } from "next/router"

const name = ()=>{

    const router = useRouter()
    const {name} =router.query


    return (
        <div>
        <h1>Welcome to Royal Pallets {name}</h1>
        </div>
    )
}

export default name