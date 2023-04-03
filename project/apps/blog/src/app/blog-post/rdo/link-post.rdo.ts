import { Expose } from 'class-transformer';

export class LinkPostRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public link: string;

  @Expose()
  public hashTags: string[];

  @Expose()
  public description: string;
}
