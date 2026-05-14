<?php
// Устанавливаем заголовки для CORS и JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Проверяем метод запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Только POST запросы']);
    exit;
}

// Получаем данные из JSON
$input = json_decode(file_get_contents('php://input'), true);

// Проверяем данные
if (empty($input['name']) || empty($input['phone'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Заполните обязательные поля']);
    exit;
}

// Очищаем данные
$name = htmlspecialchars(trim($input['name']));
$phone = htmlspecialchars(trim($input['phone']));
$companyType = htmlspecialchars(trim($input['companyType'] ?? 'Не указано'));
$taxSystem = htmlspecialchars(trim($input['taxSystem'] ?? 'Не указано'));

// Формируем письмо
$to = 'info@bubp.ru'; // Твоя почта
$subject = "Новая заявка с сайта bubp.ru от {$name}";

$message = "
<html>
<head>
    <title>Новая заявка с сайта</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #db1515; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #666; }
        .value { font-size: 16px; color: #333; }
        .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>📩 Новая заявка с сайта</h2>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Имя:</div>
                <div class='value'>{$name}</div>
            </div>
            <div class='field'>
                <div class='label'>Телефон:</div>
                <div class='value'>{$phone}</div>
            </div>
            <div class='field'>
                <div class='label'>Форма собственности:</div>
                <div class='value'>{$companyType}</div>
            </div>
            <div class='field'>
                <div class='label'>Система налогообложения:</div>
                <div class='value'>{$taxSystem}</div>
            </div>
        </div>
        <div class='footer'>
            Отправлено с сайта bubp.ru<br>
            Дата: " . date('d.m.Y H:i') . "
        </div>
    </div>
</body>
</html>
";

// Заголовки для HTML письма
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: no-reply@bubp.ru" . "\r\n";
$headers .= "Reply-To: {$to}" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Отправляем письмо
if (mail($to, $subject, $message, $headers)) {
    echo json_encode([
        'success' => true,
        'message' => 'Заявка успешно отправлена'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Ошибка при отправке письма'
    ]);
}
?>