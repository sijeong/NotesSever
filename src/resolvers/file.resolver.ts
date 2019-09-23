import { GraphQLUpload, } from 'apollo-server-koa';
import { FileUpload } from 'graphql-upload'
import fs, { createWriteStream, unlink } from 'fs';
import mkdirp from 'mkdirp';
import shortid from 'shortid';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { File } from '../schemas/File';
import { FileInput } from './types/file.input';

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

    // @Mutation(returns => File)
    // async singleUpload(@Arg("file") file: File): Promise<File> {
    //     // cosnt stream = fs.createReadStream()
    //     // const {id, path} = await storeFS({stream, filename})
    //     const input = this.fileRepository.create({

    //     })
    //     return await this.fileRepository.save(file);
    // }

    // async multipleUpload() {

    // }

    @Mutation(returns => File)
    async uploadFile(@Arg('file', type => GraphQLUpload) file: FileUpload): Promise<File> {
        const { createReadStream, filename } = await file;
        const id = shortid.generate();
        const path = `${UPLOAD_DIR}/${id}-${filename}`;
        const url:string = await new Promise((res, rej) =>
            createReadStream()
                .pipe(createWriteStream(path))
                .on('error', rej)
                .on('finish', () => {
                    unlink(path, () => {
                        res('your image url...')
                    })
                })
        )
        // const { id, path } = await storeFS({ stream, filename })

        const obj = this.fileRepository.create({
            ...file,
            path: url
        })

        return await this.fileRepository.save(obj);
    }
}