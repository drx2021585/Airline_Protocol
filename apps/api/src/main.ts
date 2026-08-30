import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { Module, Controller, Get } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@Controller('health')
class HealthController {
  @Get()
  health() {
    return { ok: true, service: 'api', timestamp: new Date().toISOString() };
  }
}

@WebSocketGateway({ cors: { origin: '*' } })
class OpsGateway {
  @WebSocketServer()
  server!: Server;

  emitEvent(eventType: string, payload: unknown) {
    this.server.emit('flight.event', { eventType, payload, emittedAt: new Date().toISOString() });
  }
}

@Module({
  controllers: [HealthController],
  providers: [OpsGateway],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  console.log('API running on http://localhost:4000');
}

bootstrap();
