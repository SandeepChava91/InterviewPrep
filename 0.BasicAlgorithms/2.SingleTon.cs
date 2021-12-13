public class SingleTonDB  {

    private static SingleTonDBObj;
    
    private SingleTonDB(){
        
    }

    public static SingleTonDB getObject(){
        if (SingleTonDBObj == null)
            SingleTonDBObj = new SingleTonDB();
 
        return SingleTonDBObj;
    }
}