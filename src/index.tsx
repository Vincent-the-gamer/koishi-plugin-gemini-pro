import { Context, Schema } from 'koishi'

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
        const response: Record<string, any>  = await ctx.http.post(ctx.config.url + "/chat", { message })

        // 回复消息
        const result = `${<quote id={messageId}/>} ${response.result}`
        session.send(result)
     })

  ctx.command("qingkong")
     .alias("清空上下文")
     .action(async ({ session }) => {
        const response: Record<string, any> = await ctx.http.get(ctx.config.url + "/clear")
        session.send(response.msg)
     })
}
