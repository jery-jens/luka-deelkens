import Link from "next/link";

const items = [
  {
    title: "Sectorverkenning",
    type: "Home",
    id: "sectorverkenning",
    index: "01",
    file: "sectorverkenning.pdf"
  },
  {
    title: "Jouw beleving",
    type: "Belevingsmanagement",
    id: "beleving",
    index: "02",
    file: ""
  },
  {
    title: "Reflectie Adventure Valley",
    type: "Belevingsmanagement",
    id: "reflectie",
    index: "03",
    file: ""
  },
  {
    title: "Marketeer of Nature",
    type: "Gezonde natuurbeleving",
    id: "marketeer",
    index: "04",
    file: ""
  },
  {
    title: "Bosbad",
    type: "Gezonde natuurbeleving",
    id: "natuur",
    index: "05",
    file: ""
  },
  {
    title: "Hébertisme – forest workout",
    type: "Actieve en speelse natuurbeleving",
    id: "forest",
    index: "06",
    file: "forest.pdf"
  },
  {
    title: "Back to nature sportkamp",
    type: "Actieve en speelse natuurbeleving",
    id: "nature",
    index: "07",
    file: "nature.pdf"
  },
  {
    title: "Natuurmens",
    type: "Interessante natuurbeleving",
    id: "natuurmens",
    index: "08",
    file: ""
  },
  {
    title: "Leave no trace on camp",
    type: "Duurzame natuurbeleving",
    id: "camp",
    index: "09",
    file: "camp.pdf"
  },
  {
    title: "Outdoor outfit",
    type: "Comfortabele natuurbeleving",
    id: "outdoor",
    index: "10",
    file: "outdoor.pdf"
  },
  {
    title: "Safety manager",
    type: "Veilige natuurbeleving",
    id: "safety",
    index: "11",
    file: "safety.pdf"
  },
  {
    title: "Angsten",
    type: "Veilige natuurbeleving",
    id: "angsten",
    index: "12",
    file: "angsten.pdf"
  },
  {
    title: "Healthy Lifestyle wandeling",
    type: "Navigatie",
    id: "healthy",
    index: "13",
    file: ""
  },
  {
    title: "Audiotour",
    type: "Wetgeving",
    id: "audiotour",
    index: "14",
    file: "audiotour.pdf"
  },
];

function Tab({index, title, type, file, id}) {
  return (
    <div id={id} className="w-full flex lg:flex-row flex-col items-center justify-between border-b border-solid border-black border-opacity-30 py-10 last:border-none">
      <div className="flex lg:flex-row flex-col items-center gap-10">
        <div className="border-solid border border-black w-28 h-28 flex justify-center items-center text-7xl rounded-full">
          {index}
        </div>

        <div className="flex flex-col lg:items-start items-center">
          <span className="uppercase tracking-tighter font-medium opacity-60 mb-3">{type}</span>
          <h2 className="font-medium lg:text-6xl text-4xl lg:text-start text-center lg:mb-0 mb-8">{title}</h2>
        </div>
      </div>

      <Link target="_blank" download href={`/files/${file ?? "none"}`} className="bg-black py-3 px-5 border-black border-solid border text-white rounded-md hover:bg-white hover:text-black">
        Download nu
      </Link>
    </div>
  )
};

export default function Home() {
  return (
    <>
      <header className="w-screen bg-white z-50 border-b border-solid border-black border-opacity-20">
        <div className="mx-auto container px-7 flex items-center justify-between py-8">
          <span className="font-bold text-4xl">Luka.</span>

          <div className="lg:flex hidden max-w-2xl flex-wrap gap-3 justify-end">
            {
              items.map((item) => {
                return <Link className="font-medium hover:opacity-60" href={`#${item.id}`}>{item.title}</Link>
              })
            }
          </div>
        </div>
      </header>

      <main className="pb-20">
        <section className="mx-auto container px-7 pt-20 pb-20 relative">
          <p className="opacity-30 uppercase font-medium tracking-tighter mb-4">Marketeer of Nature</p>
          <h1 className="lg:text-9xl text-5xl font-semibold tracking-tighter mb-6">Luka Deelkens</h1>
          <p className="opacity-60 max-w-2xl lg:text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quae. Quasi nam ipsa aliquid repudiandae alias enim accusamus eum possimus incidunt accusantium. Praesentium suscipit, assumenda corporis voluptas minus quam. Non.</p>
        </section>
        
        <section className="mx-auto container px-7">
          <video className="w-full lg:h-[600px] h-[350px] object-cover object-center" autoPlay loop muted>
            <source className="h-full flex" src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="mx-auto container px-7 mt-20">
          <div className="flex flex-col w-full">
            {items.map((item) => {
              return <Tab id={item.id} index={item.index} type={item.type} title={item.title} file={item.file} />
            })}
          </div>
        </section>
      </main>
    </>
  );
};
