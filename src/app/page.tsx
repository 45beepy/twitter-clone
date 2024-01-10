import LeftSidebar from "./components/LeftSidebar"

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full h-flex relative">
        {/*left sidebar for navigation/header */}
          <LeftSidebar />
        {/*<main>Home-timeline</main>
      <section>right-trending</section>*/}
      </div>
      
    </div>

  )
}

export default page