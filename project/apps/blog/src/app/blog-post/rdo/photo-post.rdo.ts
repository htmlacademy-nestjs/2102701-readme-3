import { Expose } from 'class-transformer';

export class PhotoPostRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public hashTags: string[];

  @Expose()
  public photo: string;
}
