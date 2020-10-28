self.addEventListener('push',()=>{
    ​self.serviceWorkerRegistration.showNotification('hello world', {});
    
  
})