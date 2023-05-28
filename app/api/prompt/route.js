import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const Notes = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(Notes), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all Notes", { status: 500 })
    }
}