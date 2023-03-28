import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreateLinkPostDto } from './dto/create-link-post.dto';
import { CreatePhotoPostDto } from './dto/create-photo-post.dto';
import { CreateQuotePostDto } from './dto/create-quote-post.dto';
import { CreateTextPostDto } from './dto/create-text-post.dto';
import { CreateVideoPostDto } from './dto/create-video-post.dto';
import { fillObject } from '@project/util/util-core';
import { LinkPostRdo } from './rdo/link-post.rdo';
import { PhotoPostRdo } from './rdo/photo-post.rdo';
import { QuotePostRdo } from './rdo/quote-post.rdo';
import { TextPostRdo } from './rdo/text-post.rdo';
import { VideoPostRdo } from './rdo/video-post.rdo';

@Controller('blog-post')
export class BlogPostController {
  constructor(
    private readonly blogPostService: BlogPostService
  ) {}

  @Post('linkpost')
  public async createLinkPost(@Body() dto: CreateLinkPostDto) {
    const newPost = await this.blogPostService.CreateLinkPost(dto);
    return fillObject(LinkPostRdo, newPost);
  }

  @Post('photopost')
  public async createPhotoPost(@Body() dto: CreatePhotoPostDto) {
    const newPost = await this.blogPostService.CreatePhotoPost(dto);
    return fillObject(PhotoPostRdo, newPost);
  }

  @Post('quotepost')
  public async createQuotePost(@Body() dto: CreateQuotePostDto) {
    const newPost = await this.blogPostService.CreateQuotePost(dto);
    return fillObject(QuotePostRdo, newPost);
  }

  @Post('textpost')
  public async createTextPost(@Body() dto: CreateTextPostDto) {
    const newPost = await this.blogPostService.CreateTextPost(dto);
    return fillObject(TextPostRdo, newPost);
  }

  @Post('videopost')
  public async createVideoPost(@Body() dto: CreateVideoPostDto) {
    const newPost = await this.blogPostService.CreateVideoPost(dto);
    return fillObject(VideoPostRdo, newPost);
  }

  @Get(':id')
  public async showLinkPost(@Param('id') id: string) {
    const existPost = await this.blogPostService.getPost(id);
    return fillObject(LinkPostRdo, existPost);
  }

  @Get(':id')
  public async showPhotoPost(@Param('id') id: string) {
    const existPost = await this.blogPostService.getPost(id);
    return fillObject(PhotoPostRdo, existPost);
  }

  @Get(':id')
  public async showQuotePost(@Param('id') id: string) {
    const existPost = await this.blogPostService.getPost(id);
    return fillObject(QuotePostRdo, existPost);
  }

  @Get(':id')
  public async showTextPost(@Param('id') id: string) {
    const existPost = await this.blogPostService.getPost(id);
    return fillObject(TextPostRdo, existPost);
  }

  @Get(':id')
  public async showVideoPost(@Param('id') id: string) {
    const existPost = await this.blogPostService.getPost(id);
    return fillObject(VideoPostRdo, existPost);
  }
}
