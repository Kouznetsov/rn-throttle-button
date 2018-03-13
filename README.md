```
import ThrottleButton from "rn-throttle-button"

<ThrottleButton pressThrottle={300} >
    /* Your children */
</ThrottleButton>
```

`pressThrottle` defines how long you want to wait between two possible clicks. Default is 300ms. 

This component inherits of TouchableOpacity and can be used as such, with the same props.

