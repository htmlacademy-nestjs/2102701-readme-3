import { Module } from '@nestjs/common';

import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { BlogPostController } from './blog-post/blog-post.controller';
import { BlogPostService } from './blog-post/blog-post.service';

@Module({
  imports: [BlogPostModule, BlogCategoryModule],
  controllers: [BlogPostController],
  providers: [BlogPostService],
})
export class AppModule {}
