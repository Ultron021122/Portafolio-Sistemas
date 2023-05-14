<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center items-center text-center my-4">
        <div class="">
            <p>
                <slot name="title" />
            </p>
            <p>
                <slot name="name-activity" />
            </p>
        </div>
        <div>
            <p class="mt-4 sm:mt-0">
                <slot name="date" />
            </p>
        </div>
        <div class="mt-3 sm:mt-0 md:pb-0 w-5/6 md:w-auto sm:col-span-2 md:col-span-1">
            <slot name="link" />
        </div>
    </div>
    <hr class="border-t border-gray-700">

</template>