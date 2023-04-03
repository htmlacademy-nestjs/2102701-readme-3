import { Expose } from 'class-transformer';

export class QuotePostRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public text: string;

  @Expose()
  public author: string;

  @Expose()
  public hashTags: string[];
}
