# global

## locale
Valid values are BCP 47 language tags e.g. "en-US", "pt-BR"

## dateFormat
Formats supported are any ordering of M/MM, D/DD and YYYY with -, /, or . separators.

## timeFormat
Time display format based on the [date-fns format tokens](https://date-fns.org/v1.29.0/docs/format) e.g. `HH:mm:ss`.

## dateTimeFormat
A combination of the above, e.g. `MM/DD/YYYY HH:mm`.

# KYC
Has two properties, type and levels

## type: *string*
KYC type

## levels: *array* 
The different levels available for the current kyc type each level will have information such us:

* label: Text to be displayed that will work as the level name
* description
* verifiedMessage: the text to display when that level has been verified
* underReviewMessage: text to display when this level is under review
* sections: The sections array holds this level form for applying for the next level

### levels.sections

A section holds metadata for creating a form as well as a label for identifying the section visually. 
A form field looks like this:
```
    {
        "label": "First Name",
        "name": "firstName",
        "type": "text",
        "validators": ["required"]
    }
```
# Products
Contains an array of products that are going to be used in the app

# Instruments
Same as products but for instruments

# SignupForm
## useEmailAsUsername: *boolean*
Allows the User to use the email as it's username, this configuration option is also used in the *"Problem Logging In"* modal
since this will tell if the app should expect an email as the input or not

# OrderHistory
 * usePagination: *boolean*
 
 * maxLines: *integer*
