package factorymethod;

public class FactoryMethodTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        Document word = wordFactory.createDocument();
        Document pdf = pdfFactory.createDocument();
        Document excel = excelFactory.createDocument();

        word.open();
        pdf.open();
        excel.open();
	}
	
}
