import fs from 'fs';
import mkdirp from 'mkdirp';
import shortid from 'shortid';
import { Resolver, Query, Mutation } from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { File } from '../schemas/Upload';

const UPLOAD_DIR = './uploads';
mkdirp.sync(UPLOAD_DIR)

const storeFS = ({ stream, filename }) => {
    const id = shortid.generate();
    const path = `${UPLOAD_DIR}/${id}-${filename}`;

    return new Promise<{ id, path }>((resolve, reject) =>
        stream
            .on('error', error => {
                if (stream.truncated)
                    fs.unlinkSync(path)
                reject(error)
            })
            .pipe(fs.createWriteStream(path))
            .on('error', error => reject(error))
            .on('finish', () => resolve({ id, path }))
    )
}

const processUpload = async upload => {
    const { createReadStream, filename, minetype } = await upload
    const stream = createReadStream()
    const { id, path } = await storeFS({ stream, filename })

    console.log({ id, filename, minetype, })
}


const exercise = () => {
    const one = new Promise<string>((resolve, reject) => {

    })
}



@Resolver(of => File)
export class FileResolver {
    constructor(
        @InjectRepository(File) private readonly fileRepository: Repository<File>
    ) { }

    @Query(returns => [File], { nullable: true })
    uploads(): Promise<File[]> {
        return this.fileRepository.find();
    }

    @Mutation(returns => File)
    async singleUpload(): Promise<File> {
        const file = this.fileRepository.create({

        })
        return await this.fileRepository.save(file);
    }

    async multipleUpload() {

    }
}