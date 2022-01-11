import { Injectable } from '@nestjs/common';
import { capitalizeFirstLetter, getAllTickets } from './helpers';

@Injectable()
export class AppService {

  
  async getAll() {
  const tickets = await getAllTickets()
  return tickets;
  }

  async getAllByMonth(month) {
    
    const filteredTicket = []
    const tickets = await getAllTickets()
    const capitalizeMonth = capitalizeFirstLetter(month)


    tickets.map(ticket => {
      if(ticket.Mês == capitalizeMonth)
        filteredTicket.push(ticket)
    })
    
    return filteredTicket
  }

  async getAllByCompany(company) {

    const filteredTicket = []
    const tickets = await getAllTickets()
    const capitalizeMonth = capitalizeFirstLetter(company)

    tickets.map(ticket => {
      if(ticket.Cliente == capitalizeMonth)
        filteredTicket.push(ticket)
    })
    
    return filteredTicket
  }

  async getCompanyByMonth(company, month) {

    const filteredTicket = []
    const tickets = await getAllTickets()
    const capitalizeName = capitalizeFirstLetter(company)
    const capitalizeMonth = capitalizeFirstLetter(month)

    tickets.map(ticket => {
      if(ticket.Cliente == capitalizeName && ticket.Mês == capitalizeMonth)
        filteredTicket.push(ticket)
    })

      return filteredTicket
  }
}
