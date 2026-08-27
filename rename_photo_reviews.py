import os


def generate_js_review_cards(folder_path, output_js_file="reviews.txt"):
    # Поддерживаемые форматы изображений
    valid_extensions = (".jpg", ".jpeg", ".png", ".gif", ".webp")

    # Получаем список файлов и сортируем их
    files = sorted(os.listdir(folder_path))
    images = [f for f in files if f.lower().endswith(valid_extensions)]

    js_cards_list = []

    print(f"Найдено изображений: {len(images)}")

    # Генерируем HTML-блоки для каждого изображения
    for index, filename in enumerate(images, start=1):
        # Формируем путь, который вы указали: src/img/reviews/
        img_src = f"src/img/reviews/{filename}"

        # Создаем строку с HTML-карточкой
        html_card = f'<div class="review-card"> <img data-lazy="{img_src}" alt="Отзыв {index}"></div>'
        js_cards_list.append(html_card)

    # Формируем итоговый JS-массив
    js_array = (
        "const reviewImages = [\n" + ",\n".join(js_cards_list) + "\n];"
    )

    # Записываем результат в файл
    with open(output_js_file, "w", encoding="utf-8") as f:
        f.write(js_array)

    print(f"Готово! JS-массив с HTML сохранен в файл: {output_js_file}")


# Укажите путь к вашей папке с картинками
folder = "/Users/bogdan/Programming/tair-site/src/img/reviews"
generate_js_review_cards(folder)
