import Image from "next/image";
import LebronJames from "../../../../public/lebron-james.avif"
import Link from "next/link";
export default function LandingDashboard() 
{
  return (
    <div>
        <h1 className="text-center text-7xl mt-4" 
            style={{ fontFamily: 'Bebas Neue'}}>BECOME<br/>YOUR INSPIRATION
        </h1>
        {/* Section Athletes List */}
        <section className="mt-4">
          <h3 className="text-center italic text-3xl underline mb-4" style={{ fontFamily: 'Bebas Neue'}}>Train like your favorite athletes</h3>
          <div className="flex text-center justify-center gap-4 mx-32 mt-4">
            <div className="card bg-base-100 w-96 shadow-xl border-2 border-black">
            <figure>
              <Image src={LebronJames} alt="Lebron James Profile Picture" width={300}/>
            </figure>
              <div className="card-body flex items-center">
                <h2 className="card-title text-3xl">LEBRON JAMES</h2>
                <p className="italic text-xl">NBA Player</p>
                <div className="card-actions justify-end">
                  <Link href={'/login'} className="btn btn-accent btn-outline">JOIN THE TRAINING</Link>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl border-2 border-black">
            <figure>
              <Image src={LebronJames} alt="Lebron James Profile Picture" width={300}/>
            </figure>
              <div className="card-body flex items-center">
                <h2 className="card-title text-3xl">LEBRON JAMES</h2>
                <p className="italic text-xl">NBA Player</p>
                <div className="card-actions justify-end">
                  <Link href={'/login'} className="btn btn-accent btn-outline">JOIN THE TRAINING</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Keep track of your progress */}
        <section className="mt-16">
        <h3 className="text-center italic text-3xl underline mb-4" style={{ fontFamily: 'Bebas Neue'}}>Keep track of your progress</h3>
        <div className="flex shadow text-center justify-center mx-32 bg-base-300 p-4 rounded-xl gap-32">
          <div className="text-primary">
            <div className="radial-progress" style={{"--value":10} as React.CSSProperties} role="progressbar">10%</div>
            <h3 style={{ fontFamily: 'Bebas Neue'}} className="text-lg mt-4">Pace</h3>
          </div>
          <div className="text-secondary">
            <div className="radial-progress" style={{"--value":20} as React.CSSProperties} role="progressbar">20%</div>
            <h3 style={{ fontFamily: 'Bebas Neue'}} className="text-lg mt-4">Strength</h3>
          </div>
          <div className="text-accent">
            <div className="radial-progress" style={{"--value":50} as React.CSSProperties} role="progressbar">50%</div>
            <h3 style={{ fontFamily: 'Bebas Neue'}} className="text-lg mt-4">Balance</h3>
          </div>
          <div className="text-warning">
            <div className="radial-progress" style={{"--value":60} as React.CSSProperties} role="progressbar">60%</div>
            <h3 style={{ fontFamily: 'Bebas Neue'}} className="text-lg mt-4">Stamina</h3>
          </div>
          <div className="text-error">
            <div className="radial-progress" style={{"--value":75} as React.CSSProperties} role="progressbar">75%</div>
            <h3 style={{ fontFamily: 'Bebas Neue'}} className="text-lg mt-4">Vertical</h3>
          </div>
        </div>
        </section>
        {/* Section Statistics Tracking */}
        <section className="mt-16 mb-8">
          <h3 className="text-center italic text-3xl underline mb-4" style={{ fontFamily: 'Bebas Neue'}}>???</h3>
          <div className="flex stats shadow text-center justify-center mx-32 bg-base-300">
            <div className="stat place-items-center gap-4">
              <div className="stat-title text-lg">Training Started</div>
              <div className="stat-value text-primary">8</div>
              <div className="stat-desc text-lg">From January 1st to February 1st</div>
            </div>
            <div className="stat place-items-center gap-4">
              <div className="stat-title text-lg">Favorite Superstar</div>
              <div className="stat-value text-accent">LEBRON JAMES</div>
              <div className="stat-desc text-lg ">Training done 4 times</div>
            </div>
            <div className="stat place-items-center gap-4">
              <div className="stat-title text-lg">Streak 🔥</div>
              <div className="stat-value text-secondary">42 DAYS</div>
              <div className="stat-desc text-lg">Highest Streak</div>
            </div>
          </div>
        </section>
    </div>
  );  
}