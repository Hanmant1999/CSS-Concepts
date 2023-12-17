const target= document.querySelectorAll(".child");

const options={
    root:null,
    rootMargin:"10px",
    threshould:1.0   
}
observer = new IntersectionObserver((
    entries)=>{
    entries.map((entry)=>{
            if(entry.isIntersecting){
                setTimeout(()=>{
                    entry.target.style.opacity =1;
                },500);
            }
            else{
                setTimeout(()=>{
                    entry.target.style.opacity =0.1;
                },500);
            }
        });

    },options);

target.forEach((element)=>{
    observer.observe(element);

})