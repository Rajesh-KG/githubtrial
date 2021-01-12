import Component from '@ember/component';

export default Component.extend({
  
        status : 'unliked',
        actions: {
            like(){
                this.set('status','liked');
            }
        }
});
