import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const Notes = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(Notes), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch Notes created by user", { status: 500 })
    }
}