package org.janoschek;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;

import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

public final class App {

    private static final List<String> orderMethods = initOrderMethods();
    private static final List<String> productLines = initProductLines();
    private static final List<String> productTypes = initProductTypes();
    private static final List<String> productNames = initProductNames();
    private static final List<String> productBrands = initProductBrands();
    private static final List<String> productColors = initProductColors();
    private static final List<String> retailerCountries = initRetailerCountries();
    private static final List<String> retailerTypes = initRetailerTypes();

    private static final int COUNT = 200;

    public static void main(String[] args) {
        try (CSVPrinter printer = new CSVPrinter(new FileWriter("classification_test.csv"), CSVFormat.DEFAULT)) {
            printer.printRecord(
                    "id",
                    "Order method code",
                    "Product line",
                    "Product type",
                    "Product",
                    "Product brand",
                    "Product color",
                    "Retailer type",
                    "Retailer country",
                    "Unit cost",
                    "Unit price"
            );
            for (int i = 1; i <= COUNT; i++) {
                Random random = new Random();
                String orderMethodCode = getRandomItem(orderMethods);
                String productLine = getRandomItem(productLines);
                String productType = getRandomItem(productTypes);
                String productName = getRandomItem(productNames);
                String productBrand = getRandomItem(productBrands);
                String productColor = getRandomItem(productColors);
                String retailerType = getRandomItem(retailerTypes);
                String retailerCountry = getRandomItem(retailerCountries);
                String unitCost = Integer.toString(random.nextInt(75) * 10);
                String unitPrice = Integer.toString(Integer.parseInt(unitCost) +
                        random.nextInt(Integer.parseInt(unitCost) / 10 + 1) * 10
                );
                printer.printRecord(
                        i,
                        orderMethodCode,
                        productLine,
                        productType,
                        productName,
                        productBrand,
                        productColor,
                        retailerType,
                        retailerCountry,
                        unitCost,
                        unitPrice
                );
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    private static List<String> initOrderMethods() {
        return Arrays.asList("Fax", "Telephone", "Mail", "E-mail", "Web", "Sales visit", "Special");
    }

    private static List<String> initProductLines() {
        return Arrays.asList(
                "Camping Equipment",
                "Mountaineering Equipment",
                "Personal Accessories",
                "Outdoor Protection",
                "Golf Equipment"
        );
    }

    private static List<String> initProductTypes() {
        return Arrays.asList(
                "Product type",
                "Cooking Gear",
                "Tents",
                "Sleeping Bags",
                "Packs",
                "Lanterns",
                "Rope",
                "Safety",
                "Climbing Accessories",
                "Tools",
                "Watches",
                "Eyewear",
                "Knives",
                "Binoculars",
                "Navigation",
                "Insect Repellents",
                "Sunscreen",
                "First Aid",
                "Irons",
                "Woods",
                "Putters",
                "Golf Accessories"
        );
    }

    private static List<String> initProductNames() {
        return Arrays.asList(
                "Product",
                "TrailChef Water Bag",
                "TrailChef Canteen",
                "TrailChef Kitchen Kit",
                "TrailChef Cup",
                "TrailChef Cook Set",
                "TrailChef Deluxe Cook Set",
                "TrailChef Single Flame",
                "TrailChef Double Flame",
                "TrailChef Kettle",
                "TrailChef Utensils",
                "Star Lite",
                "Star Dome",
                "Star Gazer 2",
                "Star Gazer 3",
                "Star Gazer 6",
                "Star Peg",
                "Hibernator Lite",
                "Hibernator",
                "Hibernator Extreme",
                "Hibernator Self - Inflating Mat",
                "Hibernator Pad",
                "Hibernator Pillow",
                "Hibernator Camp Cot",
                "Canyon Mule Climber Backpack",
                "Canyon Mule Weekender Backpack",
                "Canyon Mule Journey Backpack",
                "Canyon Mule Extreme Backpack",
                "Canyon Mule Cooler",
                "Canyon Mule Carryall",
                "Firefly Lite",
                "Firefly Mapreader",
                "Firefly 2",
                "Firefly 4",
                "Firefly Extreme",
                "Firefly Multi-light",
                "EverGlow Single",
                "EverGlow Double",
                "EverGlow Kerosene",
                "EverGlow Butane",
                "EverGlow Lamp",
                "Flicker Lantern",
                "Husky Rope 50",
                "Husky Rope 60",
                "Husky Rope 100",
                "Husky Rope 200",
                "Granite Climbing Helmet",
                "Husky Harness",
                "Husky Harness Extreme",
                "Granite Signal Mirror",
                "Granite Carabiner",
                "Granite Belay",
                "Granite Pulley",
                "Firefly Climbing Lamp",
                "Firefly Charger",
                "Firefly Rechargeable Battery",
                "Granite Chalk Bag",
                "Granite Ice",
                "Granite Hammer",
                "Granite Shovel",
                "Granite Grip",
                "Granite Axe",
                "Granite Extreme",
                "Mountain Man Analog",
                "Mountain Man Digital",
                "Mountain Man Deluxe",
                "Mountain Man Combination",
                "Mountain Man Extreme",
                "Polar Sun",
                "Polar Ice",
                "Polar Sports",
                "Polar Wave",
                "Polar Extreme",
                "Single Edge",
                "Double Edge",
                "Edge Extreme",
                "Bear Edge",
                "Bear Survival Edge",
                "Seeker 35",
                "Seeker 50",
                "Seeker Extreme",
                "Seeker Mini",
                "Glacier Basic",
                "Glacier Deluxe",
                "Glacier GPS",
                "Glacier GPS Extreme",
                "BugShield Natural",
                "BugShield Spray",
                "BugShield Lotion Lite",
                "BugShield Lotion",
                "BugShield Extreme",
                "Sun Blocker",
                "Sun Shelter Stick",
                "Sun Shelter 15",
                "Sun Shelter 30",
                "Sun Shield",
                "Compact Relief Kit",
                "Deluxe Family Relief Kit",
                "Calamine Relief",
                "Aloe Relief",
                "Insect Bite Relief",
                "Hailstorm Steel Irons",
                "Hailstorm Titanium Irons",
                "Lady Hailstorm Steel Irons",
                "Lady Hailstorm Titanium Irons",
                "Hailstorm Titanium Woods Set",
                "Hailstorm Steel Woods Set",
                "Lady Hailstorm Titanium Woods Set",
                "Lady Hailstorm Steel Woods Set",
                "Course Pro Putter",
                "Blue Steel Putter",
                "Blue Steel Max Putter",
                "Course Pro Golf and Tee Set",
                "Course Pro Umbrella",
                "Course Pro Golf Bag",
                "Course Pro Gloves",
                "Bella",
                "Capri",
                "Cat Eye",
                "Venue",
                "Dante",
                "Fairway",
                "Inferno",
                "Infinity",
                "Lux",
                "Max Gizmo",
                "Maximus",
                "Opera Vision",
                "Pocket Gizmo",
                "Ranger Vision",
                "Sam",
                "Trail Master",
                "Trail Scout",
                "Trail Star",
                "Trendi",
                "TX",
                "Legend",
                "Zodiak",
                "Zone",
                "Hawk Eye",
                "Retro",
                "Astro Pilot",
                "Sky Pilot",
                "Auto Pilot",
                "Kodiak"
        );
    }

    private static List<String> initProductBrands() {
        return Arrays.asList(
                "Product brand",
                "TrailChef",
                "Star",
                "Hibernator",
                "Extreme",
                "Canyon Mule",
                "Firefly",
                "EverGlow",
                "Husky",
                "Granite",
                "Mountain Man",
                "Polar",
                "Edge",
                "Seeker",
                "Glacier",
                "BugShield",
                "Sun",
                "Relief",
                "Hailstorm",
                "Course Pro",
                "Blue Steel",
                "Antoni",
                "Trakker",
                "Relax",
                "Alpha",
                "Epoch",
                "Xray"
        );
    }

    private static List<String> initProductColors() {
        return Arrays.asList(
                "Product color",
                "Clear",
                "Brown",
                "Unspecified",
                "Silver",
                "Green",
                "Ash",
                "Beige",
                "Red",
                "Light Blue",
                "Blue",
                "Dark Blue",
                "Grey",
                "Purple",
                "Black",
                "Yellow",
                "Orange",
                "Multicolored",
                "White",
                "Bronze",
                "Mahogany",
                "Brass",
                "Pink",
                "Camouflage"
        );
    }

    private static List<String> initRetailerCountries() {
        return Arrays.asList(
                "Country",
                "France",
                "Switzerland",
                "Germany",
                "Canada",
                "United States",
                "Mexico",
                "Japan",
                "Sweden",
                "Netherlands",
                "Italy",
                "Australia",
                "Spain",
                "Brazil",
                "Denmark",
                "Finland",
                "Korea",
                "Singapore",
                "China",
                "United Kingdom",
                "Belgium",
                "Austria"
        );
    }

    private static List<String> initRetailerTypes() {
        return Arrays.asList(
                "Type",
                "Equipment Rental Store",
                "Golf Shop",
                "Direct Marketing",
                "Warehouse Store",
                "Outdoors Shop",
                "Eyewear Store",
                "Department Store",
                "Sports Store"
        );
    }

    private static String getRandomItem(List<String> items) {
        return items.get(new Random().nextInt(items.size()));
    }

}
