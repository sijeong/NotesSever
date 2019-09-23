import { Stream } from 'stream';
import { Field, InputType } from 'type-graphql';

import { File } from '../../schemas/file';

@InputType()
export class FileInput implements Partial<File>{
    @Field(type => Stream)
    stream: Stream;

    @Field()
    filename: string;
    @Field()
    mimetype: string;
    @Field()
    encoding: string;
}