import {defineComponent} from 'vue';

export default defineComponent(
    {
        mounted() {
            // console.log('加载完成');
        },
        render() {
            return (
                <div>
                    login
                    <router-view/>
                </div>
            );
        },
    }
);