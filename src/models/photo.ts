import { Response } from 'express-serve-static-core';
import fetch from 'node-fetch';
import Model, { RelationType, ModelConfig } from './models';
import Album from './album';

export interface PhotoSchema {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
}

class Photo extends Model {
  id!: number;

  title!: string;

  url!: string;

  thumbnailUrl!: string;

  albumId!: number;

  static config: ModelConfig = {
    endpoint: 'Photos',
    relations: {
      album: {
        type: RelationType.HasMany,
        foreignKey: 'albumId',
        model: Album,
      },
    },
  } ;
}

export default Photo;
