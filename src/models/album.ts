import fetch from 'node-fetch';
import User, { UserSchema } from './user';
import Photo, { PhotoSchema } from './photo';
import api from '../api';
import Model, { RelationType, ModelConfig } from './models';

export interface AlbumSchema {
  userId: number;
  id: number;
  title: string;
}

class Album extends Model implements AlbumSchema {
  userId!: number;

  id!: number;

  title!: string;

  user: UserSchema | null = null;

  photos: PhotoSchema[] = [];

  static config: ModelConfig = {
    endpoint: 'Albums',
    relations: {
      photos: {
        type: RelationType.BelongsTo,
        foreignKey: 'albumId',
        model: Photo,
      },
      user: {
        type: RelationType.HasMany,
        foreignKey: 'userId',
        model: User,
      },
    },
  } ;

  toString() {
    return JSON.stringify(this);
  }
}

export default Album;
