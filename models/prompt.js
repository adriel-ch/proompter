import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'Prompt is required.']
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.']
    }
})

// get existing prompt on models obj, or create new if not exists
const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt