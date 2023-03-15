<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "Contacts",
  data() {
    return {
      store,
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      errors: "",
    };
  },
  methods: {
    sendForm() {
      const data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };

      axios
        .post(`${this.store.baseUrl}/api/contacts`, data)
        .then((response) => {
          if (!this.success) {
            this.errors = response.data.errors;
          } else {
            this.name = "";
            this.surname = "";
            this.email = "";
            this.phone = "";
            this.message = "";
          }
        });
    },
  },
};
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row my-5">
                <div class="col-12">
                    <h2>Pagina contatti</h2>
                </div>
                <div class="col-12">
                    <h5 class="text-center">Informazioni di contatto</h5>
                    <div class="row my-4">
                        <div class="col-12 col-md-6">
                            <div class="text-center">
                                <strong></strong>
                            </div>
                            Dati colonna sinistra
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="text-center d-flex justify-content-end">
                                Dati colonna destra
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <h5 class="text-center">Scrivici</h5>
                    <form @submit.prevent="sendForm">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <label class="control-laber" for="nome">Nome</label>
                                <input type="text" class="form-control" name="nome" id="nome" placeholder="Inserisci nome" v-model="name">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-laber" for="cognome">cognome</label>
                                <input type="text" class="form-control" name="cognome" id="cognome" placeholder="Inserisci cognome" v-model="surname">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-laber" for="Email">Email</label>
                                <input type="mail" class="form-control" name="Email" id="Email" placeholder="Inserisci Email" v-model="email">
                            </div>
                            <div class="col-12 col-md-6">
                                <label class="control-laber" for="Telefono">Telefono</label>
                                <input type="phone" class="form-control" name="Telefono" id="Telefono" placeholder="Inserisci Telefono" v-model="phone">
                            </div>
                            <div class="col-12 my-2">
                                <label class="control-laber" for="Messaggio">Messaggio</label>
                                <textarea class="w-100 m-auto" name="messaggio" id="messaggio" cols="30" rows="10" v-model="message"></textarea>
                            </div>
                            <div class="col-12 my-2 text-center">
                                <button type="submit" class="btn btn-success">invia</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <h2>GOOGLE MAPS EMPEDDED</h2>
        </div>
    </main>
</template>
<style lang="">
</style>