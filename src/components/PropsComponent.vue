<!-- <script lang="ts" setup>
    // Forma 01
    // defineProps(["saludo"])
</script> -->
<!-- <script lang="ts" setup>
    const props = defineProps({
        saludo: {
            type: String,
            required: true,
            default: "Hello",
            validator: (prop) => { 
                if (typeof prop === "string") {
                    if (prop.length > 3) return true
                }
                return false
            },
        },
    })
</script> -->
<script lang="ts" setup>
    interface PropTypes {
        saludo?: string
        nombres?: string[]
    }

    const { saludo } = withDefaults(defineProps<PropTypes>(), {
        saludo: "Hello",
        nombres: () => ["Gorka"]
    })

</script>
<template>
    <h3>Mi props component</h3>
    <p>{{ saludo }}</p>
</template>
<style></style>
