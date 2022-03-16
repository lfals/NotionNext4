import { Client } from '@notionhq/client';


const notion = new Client({
    auth: `secret_lBSuKsygdsdUvVO3faXoZ7oK45kbYpWFD9evbBBMXQz`,
})


export const getAllTickets = async () => {
  const response = await notion.databases.query({
    database_id: 'f0057d272408477eb44621facb209a4a'
  })

  const tickets = []
  const databaseItems = response.results

 databaseItems.map((ticket: any) => {
   const ticketProperties = {
     "Cliente": ticket.properties.Cliente.select.name ? ticket.properties.Cliente.select.name : `Vazio`,
    "Mês": ticket.properties.Mês.select.name ? ticket.properties.Mês.select.name : 'Vazio',
    "Ticket ID":  ticket.properties.Ticket.title[0].text.content,
    "Horas": ticket.properties.horas.rich_text[0].text.content,
    "Descriçâo": ticket.properties.Descrição.rich_text[0].text.content,
    "PGTO": ticket.properties.PGTO.rich_text[0].text.content,

  }

  tickets.push(ticketProperties)
 });
  
  return tickets
}


export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  