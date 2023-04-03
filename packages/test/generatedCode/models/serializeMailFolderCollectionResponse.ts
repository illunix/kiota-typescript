import {MailFolder} from './mailFolder';
import {MailFolderCollectionResponse} from './mailFolderCollectionResponse';
import {serializeMailFolder} from './serializeMailFolder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailFolderCollectionResponse(writer: SerializationWriter, mailFolderCollectionResponse: MailFolderCollectionResponse | undefined = {}) : void {
        writer.writeStringValue("@odata.nextLink", mailFolderCollectionResponse.odataNextLink);
        writer.writeCollectionOfObjectValues<MailFolder>("value", mailFolderCollectionResponse.value);
        writer.writeAdditionalData(mailFolderCollectionResponse.additionalData);
}
