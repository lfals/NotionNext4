import { Client } from '@notionhq/client';


const notion = new Client({
  auth: `secret_UsLl56F7lyJJjaykzX30cCEGIHvzOmrZnJKqJyab6gx`,
})

const treatMultSelect = (exec) => {
  const execTreat = []
  exec.forEach(element => {
    execTreat.push(element.name)
  });
  return execTreat
}


export const getAllTickets = async () => {
  const response = await notion.databases.query({
    database_id: '71395a4e3aa44fc99a1de2be5e16e8f8'
  })

  const tickets = []
  const databaseItems = response.results

  databaseItems.map((ticket: any) => {

    const ticketProperties = {
      "client": ticket.properties.Cliente.select.name ? ticket.properties.Cliente.select.name : "",
      "month": ticket.properties.Mês.select ? ticket.properties.Mês.select.name : "",
      "date": ticket.properties.Data.date ? ticket.properties.Data.date.start : "",
      "type": ticket.properties.Tipo.select ? ticket.properties.Tipo.select.name : "",
      "exec": treatMultSelect(ticket.properties.Exec.multi_select)[0] ? treatMultSelect(ticket.properties.Exec.multi_select) : "",
      "ticket": ticket.properties.Ticket.title[0] ? ticket.properties.Ticket.title[0].text.content : "",
      "prevision": ticket.properties.Previsão.rich_text[0] ? ticket.properties.Previsão.rich_text[0].plain_text : "",
      "hours": ticket.properties.Horas.rich_text[0] ? ticket.properties.Horas.rich_text[0].text.content : "",
      "description": ticket.properties.Descrição.rich_text[0] ? ticket.properties.Descrição.rich_text[0].text.content : "",
      "pgto": ticket.properties.PGTO.rich_text[0] ? ticket.properties.PGTO.rich_text[0].text.content : "",
    }

    tickets.push(ticketProperties)
  });

  return tickets
}


export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
