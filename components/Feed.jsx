'use client'

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        // Map callback fn must use () => ()
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState('') // state of current search field
    const [searchTimeout, setSearchTimeout] = useState(null) // used to grab timeout object
    const [searchedResults, setSearchedResults] = useState([])

    const filterPrompts = (searchText) => {
        const regex = new RegExp(searchText, "i")
        return posts.filter(
            (item) => (
                regex.test(item.creator) || regex.test(item.prompt) || regex.test(item.tag)
            )
        )
    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout)
        setSearchText(e.target.value)
        // filter posts
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value) // filters incoming posts
                setSearchedResults(searchResult)
            }, 500)
        )
    }

    const [posts, setPosts] = useState([]) // add prompts and set them

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt')
            const data = await response.json()

            setPosts(data) // updates prompt posts
        }
        fetchPosts()
    }, [])
    

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a prompt or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            {searchText ? (
                <PromptCardList
                    data={searchedResults}
                    handleTagClick={() => {}}
                />
            ) : (
                <PromptCardList
                    data={posts}
                    handleTagClick={() => {}}
                />
            )}
        </section>
    )
}

export default Feed