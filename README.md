Stor[e]y1.0

App for Location based story telling.....in development 

Problem encountered: Unhandled exception error thrown due to two event listeners pointing to the same div element on the share contract.
I needed a button to trigger the share contract and thought the logic was fine, but got help which made me look at it again and figure out to create a separate function for the button which now communicates with the sharecontract's event listener like this: sharebutton.addEventListener("click", showandShare, false);
function showandShare() {
        Windows.ApplicationModel.DataTransfer.DataTransferManager.showShareUI();
    }
Status: Solved

Problem encountered: Listviews work but I've been unable to concatenate two 
listviews into one, so the app shows either one listview or the other. Next, to create the camera capture facility and see if images can be used to create one listview object that would contain title and text as well.

Status: ongoing


