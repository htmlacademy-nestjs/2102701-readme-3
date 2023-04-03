import { Post, PostType } from '@project/shared/shared-types';

export class BlogPostEntity implements Post {
  public _id?: string;
  public _authorId?: string;
  public _dateCreatePub?: Date;
  public _datePub?: Date;
  public _publicated?: boolean;
  public publicationTitle?: string;
  public link?: string;
  public hashTags?: string[];
  public publictaionAnnouncement?: string;
  public text?: string;
  public author?: string;
  public photo?: string;
  public description?: string;
  public type?: PostType;

  constructor(blogPost: Post) {
    this.fillEntity(blogPost);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(blogPost: Post) {
    this._id = blogPost._id;
    this._authorId = blogPost._authorId;
    this._dateCreatePub = blogPost._dateCreatePub;
    this._datePub = blogPost._datePub;
    this._publicated = blogPost._publicated;
    this.publicationTitle = blogPost.publicationTitle;
    this.link = blogPost.link;
    this.hashTags = blogPost.hashTags;
    this.publictaionAnnouncement = blogPost.publictaionAnnouncement;
    this.text = blogPost.text;
    this.author = blogPost.author;
    this.photo = blogPost.photo;
    this.description = blogPost.description;
    this.type = blogPost.type;
  }
}
