// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { createAttachmentFromDiscriminatorValue, type Attachment } from '../../../../../../../../../../models/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError, type ODataError } from '../../../../../../../../../../models/oDataErrors/';
import { RequestInformation, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messages/{message-id}/attachments/{attachment-id}
 */
export interface AttachmentItemRequestBuilder extends BaseRequestBuilder<AttachmentItemRequestBuilder> {
    /**
     * Delete navigation property attachments for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Read the properties, relationships, or raw contents of an attachment that is attached to a user event, message, or group post. An attachment can be one of the following types: All these types of attachments are derived from the attachment resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Attachment
     * @see {@link https://learn.microsoft.com/graph/api/attachment-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AttachmentItemRequestBuilderGetQueryParameters> | undefined) : Promise<Attachment | undefined>;
    /**
     * Delete navigation property attachments for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties, relationships, or raw contents of an attachment that is attached to a user event, message, or group post. An attachment can be one of the following types: All these types of attachments are derived from the attachment resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AttachmentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Read the properties, relationships, or raw contents of an attachment that is attached to a user event, message, or group post. An attachment can be one of the following types: All these types of attachments are derived from the attachment resource.
 */
export interface AttachmentItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
const AttachmentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
export const AttachmentItemRequestBuilderRequestsMetadata: Record<string, RequestMetadata> = {
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
        responseBodyFactory:  createAttachmentFromDiscriminatorValue,
        queryParametersMapper: AttachmentItemRequestBuilderGetQueryParametersMapper,
    },
};
export const AttachmentItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messages/{message%2Did}/attachments/{attachment%2Did}{?%24select,%24expand}";
// tslint:enable
// eslint-enable
