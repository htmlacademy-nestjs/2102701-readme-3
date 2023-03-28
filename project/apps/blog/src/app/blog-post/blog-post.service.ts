import { Injectable } from '@nestjs/common';
import { BlogPostMemoryRepository } from './blog-post-memory.repository';
import { BlogPostEntity } from './blog-post.entity';
import { CreateLinkPostDto } from './dto/create-link-post.dto';
import { CreatePhotoPostDto } from './dto/create-photo-post.dto';
import { CreateQuotePostDto } from './dto/create-quote-post.dto';
import { CreateTextPostDto } from './dto/create-text-post.dto';
import { CreateVideoPostDto } from './dto/create-video-post.dto';
import { PostType } from '@project/shared/shared-types';

@Injectable()
export class BlogPostService {
  constructor(
    private readonly blogPostRepository: BlogPostMemoryRepository,
  ) {}

  public async CreateVideoPost(dto: CreateVideoPostDto) {
    const {publicationTitle, link, hashTags} = dto;

    const videoPost = {
      publicationTitle, link, hashTags, type: PostType.Video,
    };

    const postEntity = await new BlogPostEntity(videoPost);

    return this.blogPostRepository.create(postEntity);
  }

  public async CreateLinkPost(dto: CreateLinkPostDto) {
    const {link, hashTags, description} = dto;

    const linkPost = {
      link, hashTags, description, type: PostType.Link,
    };

    const postEntity = await new BlogPostEntity(linkPost);

    return this.blogPostRepository.create(postEntity);
  }

  public async CreatePhotoPost(dto: CreatePhotoPostDto) {
    const {photo, hashTags} = dto;

    const photoPost = {
      photo, hashTags, type: PostType.Photo,
    };

    const postEntity = await new BlogPostEntity(photoPost);

    return this.blogPostRepository.create(postEntity);
  }

  public async CreateQuotePost(dto: CreateQuotePostDto) {
    const {text, author, hashTags} = dto;

    const quotePost = {
      text, author, hashTags, type: PostType.Quote,
    };

    const postEntity = await new BlogPostEntity(quotePost);

    return this.blogPostRepository.create(postEntity);
  }

  public async CreateTextPost(dto: CreateTextPostDto) {
    const {text, publicationTitle, publictaionAnnouncement, hashTags} = dto;

    const textPost = {
      text, publicationTitle, publictaionAnnouncement, hashTags, type: PostType.Text,
    };

    const postEntity = await new BlogPostEntity(textPost);

    return this.blogPostRepository.create(postEntity);
  }

  public async getPost(id: string) {
    return this.blogPostRepository.findById(id);
  }
}
