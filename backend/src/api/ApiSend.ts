import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqSend, ResSend } from "../shared/protocols/PtlSend";

// This is a demo code file
// Feel free to delete it

export default async function (call: ApiCall<ReqSend, ResSend>) {
    // Success
    let time = new Date();
    call.succ({
        time: time
    });
}