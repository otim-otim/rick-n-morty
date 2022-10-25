<script>
import axios from 'axios'
export default {
     data (){
        return {
            characters,
        }
     },

     async created() {
        this.characters = await  axios.get
     },
}
</script>