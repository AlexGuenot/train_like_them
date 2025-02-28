import Image from "next/image";
import LebronJames from "../../../../public/lebron-james.avif"
import Shai from "../../../../public/shai.png"
export default function LandingDashboard() 
{
  return (
    <div>
      <h1 className="text-center text-7xl mt-4" 
          style={{ fontFamily: 'Bebas Neue'}}>BECOME<br/>YOUR INSPIRATION
      </h1>
      <div className="flex text-center justify-center gap-4 mx-32 mt-4">
        <div className="card bg-base-100 w-96 shadow-xl border-2 border-black">
        <figure>
          <Image src={LebronJames} alt="Lebron James Profile Picture" width={300}/>
        </figure>
          <div className="card-body flex items-center">
            <h2 className="card-title text-3xl">LEBRON JAMES</h2>
            <p className="italic text-xl">NBA Player</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-outline">JOIN THE TRAINING</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl border-2 border-black">
        <figure>
          <Image src={Shai} alt="SGA Profile Picture" width={300}/>
        </figure>
          <div className="card-body flex items-center">
            <h2 className="card-title text-3xl">Shai Gilgeous-Alexander</h2>
            <p className="italic text-xl">NBA Player</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-outline">JOIN THE TRAINING</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );  
}