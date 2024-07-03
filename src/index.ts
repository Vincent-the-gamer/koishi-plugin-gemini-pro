import { Context, Schema, h } from 'koishi'

export const name = 'gemini-pro'

export interface Config {
  url: string
}

export const Config: Schema<Config> = Schema.object({
  url: Schema.string().description("自建后端的url,如http://127.0.0.1:8080").default("http://127.0.0.1:8080")
})

export function apply(ctx: Context) {
  ctx.command("gemini <message:text>")
     .alias("ai")
     .action(async ({ session }, message) => {
         const messageId = session.messageId
         let response: Record<string, any> = {}
         let result: string = ""
        // 清空上下文
        if(message === "清空上下文") {
            response = await ctx.http.get(ctx.config.url + "/clear")
            result = `${ h.quote(messageId) } ${response.msg}`
            session.send(result)
        } else {
            response = await ctx.http.post(ctx.config.url + "/chat", { message })
            // 回复消息
            result = `${ h.quote(messageId) } ${response.result}`
            session.send(result)
        }
     })
}