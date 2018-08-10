/**
 * It is used to provide a unified and simpler public facing interface
 * for ease of use that shields away from the complexities of its
 * consisting subsystems or subclasses.
 */

let currentId = 0;

class ComplaintRegistry {
  registerComplaint(customer, type, details) {
    const id = ComplaintRegistry._uniqueGenerator();

    let registry;
    if (type === "service") {
      registry = new ServiceComplaints();
    }

    return registry.addComplaint({ id, customer, details });
  }

  static _uniqueGenerator() {
    return ++currentId;
  }
}

class Complaints {
  constructor() {
    this.Complaints = [];
  }

  addComplaint(complaint) {
    this.Complaints.push(complaint);
    return this.replyMessage(complaint);
  }

  getComplaint(id) {
    return this.Complaints.find(complaint => complaint.id === id);
  }

  replyMessage(complaint) {}
}

class ServiceComplaints extends Complaints {
  constructor() {
    super();
    if (ServiceComplaints.exists) {
      return ServiceComplaints.instance;
    }
    ServiceComplaints.instance = this;
    ServiceComplaints.exists = true;
    return this;
  }

  replyMessage({ id, customer, details }) {
    return `Complaint No ${id} reported by ${customer} regarding to ${details}`;
  }
}

// usage
const registry = new ComplaintRegistry();
const reportService = registry.registerComplaint(
  "Martha",
  "service",
  "availability"
);

console.log(reportService);
