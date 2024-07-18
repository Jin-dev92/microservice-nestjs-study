import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  uploadFile(file: Express.MulterS3.File) {
    //   https://issuebombom.tistory.com/104
    if (!file) {
      throw new BadRequestException('파일이 존재하지 않습니다.');
    }
    return file;
  }
}
