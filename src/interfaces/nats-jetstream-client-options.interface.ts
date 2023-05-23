import { ModuleMetadata } from '@nestjs/common';
import {
  ConnectionOptions,
  JetStreamOptions,
  JetStreamPublishOptions,
} from 'nats';
import { NatsConnectionOptions } from './nats-connection-options.interface';
import {RequestOptions} from "nats/lib/nats-base-client/types";

export interface NatsJetStreamClientOptions {
  connectionOptions: Partial<NatsConnectionOptions> &
    Pick<ConnectionOptions, 'name'>;
  jetStreamOption?: JetStreamOptions;
  jetStreamPublishOptions?: JetStreamPublishOptions;
  requestOptions : RequestOptions
}

// noinspection JSUnusedGlobalSymbols
export interface NatsJetStreamClientAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (
    ...args: any[]
  ) => Promise<NatsJetStreamClientOptions> | NatsJetStreamClientOptions;
  inject?: any[];
}
