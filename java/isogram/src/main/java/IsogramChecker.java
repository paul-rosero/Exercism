class IsogramChecker {

    boolean isIsogram(String phrase) {
        phrase = phrase.toLowerCase().replaceAll(" |-", "");
        return phrase.chars().distinct().count() == phrase.length();
    }
}
