/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMessageFromDiscriminatorValue, deserializeIntoMessage, serializeMessage, type Message } from '../../../../../../../../models/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError, type ODataError } from '../../../../../../../../models/oDataErrors/';
import { AttachmentsRequestBuilderNavigationMetadata, AttachmentsRequestBuilderRequestsMetadata, AttachmentsRequestBuilderUriTemplate, type AttachmentsRequestBuilder } from './attachments/';
import { ExtensionsRequestBuilderNavigationMetadata, ExtensionsRequestBuilderRequestsMetadata, ExtensionsRequestBuilderUriTemplate, type ExtensionsRequestBuilder } from './extensions/';
import { ContentRequestBuilderRequestsMetadata, ContentRequestBuilderUriTemplate, type ContentRequestBuilder } from './value/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}
 */
export interface MessageItemRequestBuilder extends BaseRequestBuilder<MessageItemRequestBuilder> {
    /**
     * The attachments property
     */
    get attachments(): AttachmentsRequestBuilder;
    /**
     * The Content property
     */
    get content(): ContentRequestBuilder;
    /**
     * The extensions property
     */
    get extensions(): ExtensionsRequestBuilder;
    /**
     * Delete navigation property messages for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * The collection of messages in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Message
     */
     get(requestConfiguration?: RequestConfiguration<MessageItemRequestBuilderGetQueryParameters> | undefined) : Promise<Message | undefined>;
    /**
     * Update the navigation property messages in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Message
     */
     patch(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Message | undefined>;
    /**
     * Delete navigation property messages for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of messages in the mailFolder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property messages in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Message, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of messages in the mailFolder.
 */
export interface MessageItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
const MessageItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
export const MessageItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MessageItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    "attachments": {
        uriTemplate: AttachmentsRequestBuilderUriTemplate,
        requestsMetadata: AttachmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AttachmentsRequestBuilderNavigationMetadata,
    },
    "content": {
        uriTemplate: ContentRequestBuilderUriTemplate,
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
    "extensions": {
        uriTemplate: ExtensionsRequestBuilderUriTemplate,
        requestsMetadata: ExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: ExtensionsRequestBuilderNavigationMetadata,
    },
};
export const MessageItemRequestBuilderRequestsMetadata: Record<string, RequestMetadata> = {
    "delete": {
        responseBodyContentType: "application/json",
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
    "get": {
        responseBodyContentType: "application/json",
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageFromDiscriminatorValue,
        queryParametersMapper: MessageItemRequestBuilderGetQueryParametersMapper,
    },
    "patch": {
        responseBodyContentType: "application/json",
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
export const MessageItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */
