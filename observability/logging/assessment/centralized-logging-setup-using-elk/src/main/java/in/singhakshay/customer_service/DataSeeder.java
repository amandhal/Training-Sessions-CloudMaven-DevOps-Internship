package in.singhakshay.customer_service;

import in.singhakshay.customer_service.model.Customer;
import in.singhakshay.customer_service.repo.CustomerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final CustomerRepository customerRepository;

    @Override
    public void run(String... args) {
        if (customerRepository.count() == 0) {
            customerRepository.saveAll(List.of(
                Customer.builder()
                    .name("Customer One").email("customer-1@cloudmaven.com")
                    .phone("9876543210").address("Sector 17")
                    .city("Mohali").state("Punjab").country("India").build(),
                Customer.builder()
                    .name("Customer Two").email("customer-2@cloudmaven.com")
                    .phone("9123456780").address("Sector 69")
                    .city("Gurugram").state("Haryana").country("India").build()
            ));
            log.info("✅ Seeded 2 customers");
        } else {
            log.info("⏭ Data exists, skipping seed");
        }
    }
}