import { BsDot } from "react-icons/Bs"
import LeftSidebar from "./components/LeftSidebar"

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full h-flex relative">
        {/*left sidebar for navigation/header */}
          <LeftSidebar />
        <main className="ml-[275px] p-6 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-3xl font-bold">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] px-4 border-gray-600 flex items-strech py-4 space-x-2 border-gray-600 h-32 relative">
            <div className="w-10 h-10 bg-slate-400 flex-none rounded-full"></div>
            <div className="flex flex-col w-full">
                  <input type="text" 
                  className="w-full h-full bg-transparent border-b-[0.5px p-4 outline-none border-none"
                  placeholder="What's Happening"/>
              <div className="w-full justify-between intems-center flex">
                <div>

                </div>
                <div className="w-full max-w-[100px]">
                  <button className='m-2 rounded-full bg-primary px-4 py-2 text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold'>Post</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({length:5}).map((_,i)=>(
                <div key={i} className="border-t-[0.5px] border-b-[0.5px] p-4 flex spacce-x-4">   
                  <div >
                    <div className="w-10 h-10 bg-slate-200 rounded-full"/>
                  </div>
                  <div className="flex flex-col px-4 space-y-4">
                    <div className="flex items-center space-x-1">
                      <div>Rusted Reaper</div>
                      <div>@rustedreaper</div>
                      <div>
                        <BsDot/>
                      </div>
                      <div>1 hour ago</div>
                    </div>
                    <div className="text-white text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum accusantium eveniet neque explicabo fugit necessitatibus odio, nemo suscipit. Ducimus officia ratione repudiandae ipsum fugiat magnam aliquid quasi earum consequuntur? Culpa libero, magnam placeat consequatur sapiente consectetur ullam ea recusandae porro iusto, nemo tempora unde perspiciatis quibusdam quis aperiam nam eius iure fugit, nihil possimus ut? Veniam accusantium magni minus. Incidunt earum, enim, eius aperiam quaerat omnis eveniet maiores consectetur porro facere non corrupti, est corporis iste ullam repellendus ut similique autem natus! Dicta ducimus officia, quam asperiores molestias reiciendis voluptates nihil illo voluptas eligendi consequuntur tempore rerum. Eum, at et.
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
                    <div className="flex intems-center space=x-2 w-full">
                      <div>C</div>
                      <div>Q</div>
                      <div>L</div>
                      <div>S</div>
                      <div>SH</div>
                    </div>  
                  </div>   
                </div>
              ))
            }
          </div>

        </main>
      {/*<section>right-trend275ing</section>*/}
      </div>
    </div>

  )
}

export default page