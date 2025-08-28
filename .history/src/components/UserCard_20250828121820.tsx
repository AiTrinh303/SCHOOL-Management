import Image from "next/image"

const UserCard = ({type}:{type: string}) => {
  return (
    <div className='rounded-2xl odd:bg-jojoPurple even:bg-jojoYellow p-4 flex-1 min-w-[130px'>        
        <div>
            <span>2024/25</span>
            <Image src="/more.png" alt="More" width={20} height={20} />
            <h1>1234</h1>
            <h2>{type}</h2>
        </div>
    </div>
  )
}

export default UserCard