// Homepage
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            <span className="orange_gradient text-center"> AI Prompt Sharing</span>
            <br className="max-md:hidden"/>
            For all.
        </h1>
        <p className="desc text-center">
            Proompter is an open-source AI prompt sharing tool.
            <br/>
            Become a proooompt engineer with the power of the community.
        </p>

        <Feed/>
    </section>
  )
}

export default Home