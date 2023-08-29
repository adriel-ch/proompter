import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"

// params get populated if dynamic vars passed into URL, i.e. check /app/profile/page,jsx
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator')

        return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response('Failed to fetch all prompts.', {status: 500})
    }
}