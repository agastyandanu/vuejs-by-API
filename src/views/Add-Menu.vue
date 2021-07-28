<template>
    
    <div>        
        <Navbar />
        <div class="container mt-4">
            <h2 class="text-center">Insert Menu</h2>
            <div class="row mt-4">
                <div class="col-md-8 offset-md-2">
                    <form @submit.prevent="addProcess">
                        <div class="mb-3">
                            <input v-model="addData.title" type="text" class="form-control" placeholder="Menu Name">
                        </div>
                        <div class="mb-3">
                            <input @change="upload" type="file" name="image" class="form-control">
                        </div>
                        <div class="mb-3">
                            <textarea v-model="addData.content" class="form-control" rows="3" placeholder="Menu Description"></textarea>
                        </div>
                        <div class="mb-3">
                            <button to="/" class="btn btn-block btn-danger">Cancel</button>
                            <button type="submit" class="btn btn-block btn-primary ml-3">Save</button>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    </div>
  
</template>

<script>
    import axios from 'axios';
    import Navbar from '@/components/Navbar.vue';

    export default {
        name: 'Add-Menu',
        components: {
            Navbar
        },

        data() {
            return {
                addData: {
                    title: '',
                    image: '',
                    content: '',
                }
            }
        },

        methods: {
            addProcess() {
                console.log(addData.image);
                // axios.post('http://127.0.0.1:8000/api/v1/post/save-data', this.addData)
                // .then((response) => {
                //     if(response.status === 200) {
                //         alert('Data Added');
                //     } else if (response.status === 401) {
                //         alert('Data Incorrect');
                //     } else {
                //         alert('Something Gone Wrong');
                //     }
                // });
            }

        },       

    }
</script>

<style>

</style>