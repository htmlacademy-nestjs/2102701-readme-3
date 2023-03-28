import {PostType} from './post-type.enum';

export interface Post {
  _id?: string;
  _authorId?: string;
  _dateCreatePub?: Date;
  _datePub?: Date;
  _publicated?: boolean;
  publicationTitle?: string;
  link?: string;
  hashTags?: string[];
  publictaionAnnouncement?: string;
  text?: string;
  author?: string;
  photo?: string;
  description?: string;
  type?: PostType;
}
