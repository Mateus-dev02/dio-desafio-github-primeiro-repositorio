 package one.digitalinnovation.gof.singleton;

/**
 * singleton "pregu�oso".
 * 
 * @author JunBsoft
 *
 */
public class SingletonEager {
	
	private static SingletonEager instancia = new SingletonEager();

	public SingletonEager() {
		super();
		
	}
	
	public static SingletonEager getInstancia() {
		
		return instancia;
	}

}
