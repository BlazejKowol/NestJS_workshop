import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersController } from './orsers/orders.controller';
import { OrdersService } from './orsers/orders.service';

@Module({
  imports: [ProductsModule, OrdersModule],
  controllers: [AppController, OrdersController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
