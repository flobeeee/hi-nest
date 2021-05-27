import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional() // 유효성검사 무시 (선택적인 인자)
  @IsString({ each: true })
  readonly genres: string[];
}
