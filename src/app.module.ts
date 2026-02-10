import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicsModule } from './comics/comics.module';
import { CustomersModule } from './customers/customers.module';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [ComicsModule, CustomersModule, PurchasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
