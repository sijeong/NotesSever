import { NoteData, notes } from "../data";
import { Resolver, Query, Arg, Mutation } from "type-graphql";
import Note from "../schemas/note";

@Resolver(of => Note)
export default class {
    @Query(returns => [Note])
    notes(): NoteData[] {
        return notes;
    }
    @Query(returns => Note, { nullable: true })
    getNote(@Arg("id") id: string): NoteData | undefined {
        return notes.find(note => note.id === id)
    }
    @Mutation(returns => Note)
    editContent(id: string, content: string): NoteData {
        const note = notes.find(note => {
            return note.id === id;
        });

        if (!note) {
            throw new Error(`Couldn't find note with id ${id}`)
        }

        return note;
    }
    
}