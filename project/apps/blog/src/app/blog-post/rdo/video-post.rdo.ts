import { Expose } from 'class-transformer';

export class VideoPostRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public publicationTitle: string;

  @Expose()
  public link: string;

  @Expose()
  public hashTags: string[];
}
