package search;

public class SearchTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Product linearResult =
                SearchOperations.linearSearch(products, 104);

        System.out.println("Linear Search Result:");
        System.out.println(linearResult);

        Product binaryResult =
                SearchOperations.binarySearch(products, 104);

        System.out.println("\nBinary Search Result:");
        System.out.println(binaryResult);
	}

}
