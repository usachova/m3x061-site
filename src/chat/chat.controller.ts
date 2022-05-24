import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Render } from '@nestjs/common';

@ApiTags('Chat')
@Controller()
export class ChatController {
  @ApiOperation({ summary: 'enter comment' })
  @Get('chat')
  @Render('chat')
  getChat() {
    return;
  }
}
