import { Expose } from 'class-transformer';

export class TextPostRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public publicationTitle: string;

  @Expose()
  public publictaionAnnouncement: string;

  @Expose()
  public text: string;

  @Expose()
  public hashTags: string[];
}
