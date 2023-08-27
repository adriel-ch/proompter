// Homepage
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover and Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> AI-powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Proompter is an open-source AI prompting tool for the modern world.
            Discover, create, and share creative prompts with others.
        </p>

        <Feed/>
    </section>
  )
}

export default Home