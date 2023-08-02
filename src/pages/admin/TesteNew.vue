<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" rows="10"></ckeditor>
           
    </div>
    
</template>
  
  <script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
    name: 'App',
    components: {

    },
    data(){
        return {
            editor: ClassicEditor,
            editorData:'<p>Content of the editor.</p>',
            editorConfig: {

            }
        };

    }
  }
  
   
  </script>
  
  <style scoped>
  </style>