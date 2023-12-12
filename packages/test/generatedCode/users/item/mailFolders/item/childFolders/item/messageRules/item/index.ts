// tslint:disable
// eslint-disable
// Generated by Microsoft Kiota
import { createMessageRuleFromDiscriminatorValue, deserializeIntoMessageRule, serializeMessageRule, type MessageRule } from '../../../../../../../../models/';
import { createODataErrorFromDiscriminatorValue, deserializeIntoODataError, serializeODataError, type ODataError } from '../../../../../../../../models/oDataErrors/';
import { RequestInformation, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestAdapter, type RequestConfiguration, type RequestMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/mailFolders/{mailFolder-id}/childFolders/{mailFolder-id1}/messageRules/{messageRule-id}
 */
export interface MessageRuleItemRequestBuilder extends BaseRequestBuilder<MessageRuleItemRequestBuilder> {
    /**
     * Delete the specified messageRule object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     * @see {@link https://learn.microsoft.com/graph/api/messagerule-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get the properties and relationships of a messageRule object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MessageRule
     * @see {@link https://learn.microsoft.com/graph/api/messagerule-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MessageRuleItemRequestBuilderGetQueryParameters> | undefined) : Promise<MessageRule | undefined>;
    /**
     * Change writable properties on a messageRule object and save the changes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MessageRule
     * @see {@link https://learn.microsoft.com/graph/api/messagerule-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: MessageRule, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MessageRule | undefined>;
    /**
     * Delete the specified messageRule object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the properties and relationships of a messageRule object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageRuleItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Change writable properties on a messageRule object and save the changes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: MessageRule, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties and relationships of a messageRule object.
 */
export interface MessageRuleItemRequestBuilderGetQueryParameters {
    /**
     * Select properties to be returned
     */
    select?: string[];
}
const MessageRuleItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "select": "%24select",
};
export const MessageRuleItemRequestBuilderRequestsMetadata: Record<string, RequestMetadata> = {
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
        responseBodyFactory:  createMessageRuleFromDiscriminatorValue,
        queryParametersMapper: MessageRuleItemRequestBuilderGetQueryParametersMapper,
    },
    "patch": {
        responseBodyContentType: "application/json",
        errorMappings: {
            "4XX": createODataErrorFromDiscriminatorValue,
            "5XX": createODataErrorFromDiscriminatorValue,
        } as Record<string, ParsableFactory<Parsable>>,
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageRuleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessageRule,
    },
};
export const MessageRuleItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/mailFolders/{mailFolder%2Did}/childFolders/{mailFolder%2Did1}/messageRules/{messageRule%2Did}{?%24select}";
// tslint:enable
// eslint-enable
