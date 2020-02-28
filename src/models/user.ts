import { Response } from 'express-serve-static-core';
import fetch from 'node-fetch';
import CompanySchema from './company';
import AddressSchema from './address';
import Model, { RelationType, ModelConfig } from './models';
import Album from './album';

export interface UserSchema {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressSchema;
  phone: string;
  website: string;
  company: CompanySchema;
}

class User extends Model implements UserSchema {
  id!: number;

  name!: string;

  username!: string;

  email!: string;

  phone!: string;

  website!: string;

  address!: AddressSchema;

  company!: CompanySchema;

  static config: ModelConfig = {
    endpoint: 'Users',
    relations: {
      albums: {
        type: RelationType.HasMany,
        foreignKey: 'userId',
        model: Album,
      },
    },
  } ;
}

export default User;
