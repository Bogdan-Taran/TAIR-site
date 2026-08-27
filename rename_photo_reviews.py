import os


def rename_and_generate_js(folder_path, output_js_file="images.txt"):
    # Поддерживаемые форматы изображений
    valid_extensions = (".jpg", ".jpeg", ".png", ".gif", ".webp")

    # Получаем список всех файлов и сортируем их
    files = sorted(os.listdir(folder_path))

    # Фильтруем только изображения
    images = [f for f in files if f.lower().endswith(valid_extensions)]

    js_images_list = []

    print(f"Найдено изображений: {len(images)}")

    # Переименование файлов
    for index, filename in enumerate(images, start=1):
        ext = os.path.splitext(filename)[1].lower()
        new_name = f"image_{index}{ext}"

        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)

        # Переименовываем физически на диске
        os.rename(old_path, new_path)

        # Добавляем путь для JS (используйте нужный вам путь, например 'assets/img/')
        js_images_list.append(f"  '{new_name}'")

    # Формируем итоговую строку для JS
    js_array = "const reviewImages = [\n" + ",\n".join(js_images_list) + "\n];"

    # Записываем результат в файл
    with open(output_js_file, "w", encoding="utf-8") as f:
        f.write(js_array)

    print(f"Готово! JS-массив сохранен в файл: {output_js_file}")


# Укажите путь к вашей папке с картинками
# Пример для Windows: r"C:\Users\User\Pictures" или для текущей папки: "."
folder = "/Users/bogdan/Programming/tair-site/src/img/reviews"
rename_and_generate_js(folder)
