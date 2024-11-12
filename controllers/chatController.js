import generateAIResponse from "../services/chatService.js";



const messageHandler = async (userID,sessionID,message,selectedModel="gpt-4o-mini") => {
    try {
        let user = userID;
        let id = sessionID;
        let model = selectedModel;
        let content = message.content;
        console.log("all information loaded");
        
        console.log("send request from controller...");
        const reply = await generateAIResponse(user,id,content,model); 
        console.log("message has sent!");
        
        return reply;
    } catch (error){
        console.error("messageHandler controller error",error);
    }
};

export default messageHandler;

