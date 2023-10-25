

export default function About() {
  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-36 sm:py-32">
      <img
        src={require("./assets/group-afro-americans-working-together.jpg")}
        alt=""
        className="absolute inset-0 -z-10 opacity-40 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Myusiki foundation is an answer to the long-awaited need to have a community for artists and their fans and music lovers to meet, greet and have a good time. The idea was born out of a great desire to have a place to sing and out of the realization of how difficult it is for young and upcoming artists to find and audience to listen to their music. The aim of the foundation is to nurture young talent so that every musical soul gets to attain their maximum potential. We also aim to give every artistic soul whether big time or small time, a community to listen to their music right where they are. We also aim to create the biggest global community of creatives that unite in the common ambition of creating good music that gives everyone wings to fly.
          </p>
        </div>
        
      </div>
      
    </div>
    <section className="py-6 dark:bg-gray-800 dark:text-gray-100" >
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <h3 className="text-2xl font-bold text-center tracking-tight text-red-500 sm:text-6xl">
            Misson
          </h3>
          <p className="mt-6 text-lg text-center leading-8 text-white">
          To create an artistic soul for every creative to fond a place to grow and belong while giving every music lover and fun a chance to interact with their favorite artist on a more personal level.          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <h3 className="text-2xl font-bold text-center tracking-tight text-red-500 sm:text-6xl">
        Vision
          </h3>
          <p className="mt-6 text-lg text-center text-white leading-8 ">
          To be the global home for artists and music lovers where they feel like they belong and are free to just be themselves because we understand what it takes to be a creative in the middle of a chaotic world. 
                </p> </div>
    </section>
    <section className="py-6 dark:bg-gray-800 ">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
		<h1 className="text-4xl font-bold text-red-500 text-center sm:text-5xl">Our team</h1>
		<p className="max-w-2xl text-center text-white dark:text-gray-400">Welcome to the heart and soul of our organization. Our teams are the driving force behind our mission and success. Get to know the talented individuals who work tirelessly to bring innovation, expertise, and dedication to every aspect of our foundation.</p>
		<div className="flex flex-row flex-wrap justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={require("./assets/profile/stedy.jpg")} />
				<p className="text-xl font-semibold leadi">Roland Stedy</p>
				<p className="dark:text-gray-400">Chief Executive Officer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={require("./assets/profile/chelsea.jpg")} />
				<p className="text-xl font-semibold leadi">Chelsea Machini</p>
				<p className="dark:text-gray-400">Chief Financial Officer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={require("./assets/profile/austine.jpg")} />
				<p className="text-xl font-semibold leadi">Austine Ndauwa</p>
				<p className="dark:text-gray-400">Chief Technical Officer.</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
				<p className="text-xl font-semibold leadi">Sheila Otuko</p>
				<p className="dark:text-gray-400">Chief Marketing Officer</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={require("./assets/profile/Victor.jpg")} />
				<p className="text-xl font-semibold leadi">Victor Obare</p>
				<p className="dark:text-gray-400">Lead Music Production</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={require("./assets/profile/steph.jpg")} />
				<p className="text-xl font-semibold leadi">Stephanie Njoki</p>
				<p className="dark:text-gray-400">Lead Vocalist</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={require("./assets/profile/Fido.jpg")} />
				<p className="text-xl font-semibold leadi">Fidelis Njoroge</p>
				<p className="dark:text-gray-400">Lead Choreography.</p>
			</div>
		</div>
	</div>
</section>
    </>
  );
}
