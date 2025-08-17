package com.example.EcomPlant.service;

import com.example.EcomPlant.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import com.example.EcomPlant.repository.ProductRepository;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product findProductById(String Id) throws IOException {
        return productRepository.findProductById(Id);
    }

    public void saveAllProductsWithImages() throws IOException {
        List<Product> products = new ArrayList<>();

        products.add(createProduct(
                "feroniella-bonsai",
                "Feroniella Bonsai",
                "from SGD 148.00",
                "featured",
                "pot1.webp",
                "A beautifully sculpted Feroniella Bonsai that brings elegance and tranquility to any space. Perfect for desks, living rooms, or patios — its unique foliage and compact form make it an instant conversation starter.",
                0
        ));

        products.add(createProduct(
                "variegated-three-leaf-clover",
                "Variegated Three Leaf Clover",
                "SGD 228.00",
                "featured",
                "pot2.webp",
                "A rare Variegated Three Leaf Clover with striking green and creamy-white leaves, symbolizing luck and prosperity. Low-maintenance yet visually stunning — a perfect gift or personal treasure.",
                0
        ));

        products.add(createProduct(
                "three-leaf-clover",
                "Three Leaf Clover",
                "SGD 98.00",
                "featured",
                "pot4.webp",
                "Classic Three Leaf Clover, a timeless charm for good fortune and positive vibes. Easy to grow indoors and outdoors, making it ideal for beginner plant lovers.",
                0
        ));

        products.add(createProduct(
                "soilboy-plant-stand-ivory",
                "Soilboy Modular Plant Stand - Ivory",
                "SGD 159.00",
                "shelves",
                "shelf1.webp",
                "Elegant ivory modular stand that fits any decor style. Sturdy yet lightweight, perfect for showcasing plants in style while keeping them elevated for better sunlight exposure.",
                0
        ));

        products.add(createProduct(
                "soilboy-plant-trolley",
                "Soilboy Modular Plant Trolley",
                "SGD 289.00",
                "shelves",
                "shelf2.webp",
                "A versatile plant trolley designed for effortless mobility. Rearrange your indoor garden with ease while adding a touch of modern design to your space.",
                0
        ));

        products.add(createProduct(
                "soilboy-plant-stand-black",
                "Soilboy Modular Plant Stand - Black",
                "SGD 159.00",
                "shelves",
                "shelf3.webp",
                "Sleek black modular stand that blends with any interior theme. Strong build for holding multiple plants, adding a contemporary and organized look to your plant corner.",
                0
        ));

        productRepository.saveAll(products);
    }

    private Product createProduct(
            String id,
            String name,
            String price,
            String category,
            String imageFileName,
            String description,
            int quantity
    ) throws IOException {
        Product product = new Product();
        product.setId(id);
        product.setName(name);
        product.setPrice(price);
        product.setCategory(category);
        product.setDescription(description);
        product.setQuantity(quantity);

        try {
            ClassPathResource imgFile = new ClassPathResource("static/images/" + imageFileName);
            byte[] imageData = imgFile.getInputStream().readAllBytes();
            product.setImage(imageData);
        } catch (IOException e) {
            System.out.println("Error loading image: " + imageFileName);
            e.printStackTrace();
        }

        return product;
    }
}
