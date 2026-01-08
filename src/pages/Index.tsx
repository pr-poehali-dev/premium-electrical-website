import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [calcData, setCalcData] = useState({
    objectType: 'apartment',
    area: 50,
    rooms: 2,
    includeDesign: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const calculatePrice = () => {
    const basePrice = calcData.objectType === 'apartment' ? 3000 : calcData.objectType === 'house' ? 3500 : 5000;
    const areaPrice = calcData.area * basePrice;
    const designPrice = calcData.includeDesign ? areaPrice * 0.15 : 0;
    return Math.round(areaPrice + designPrice);
  };

  const testimonials = [
    {
      name: 'Алексей Петров',
      role: 'Владелец квартиры',
      text: 'Отличная работа! Сделали электромонтаж под ключ за неделю. Чисто, аккуратно, все работает идеально. Гарантию дали на 5 лет.',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      role: 'Владелица ресторана',
      text: 'Заказывали электрику для нового ресторана. Команда профессионалов — все сделали точно в срок, без единой задержки. Рекомендую!',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Собственник дома',
      text: 'Делали проводку в загородном доме. Поразило качество работы и чистота после завершения — ни пылинки! Цена соответствует качеству.',
      rating: 5
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Квартиры и дома',
      description: 'Полный спектр электромонтажных работ для жилых помещений'
    },
    {
      icon: 'Building2',
      title: 'Коммерческие объекты',
      description: 'Профессиональное обслуживание офисов, магазинов, ресторанов'
    },
    {
      icon: 'Factory',
      title: 'Промышленные объекты',
      description: 'Монтаж и обслуживание силового оборудования'
    },
    {
      icon: 'Lightbulb',
      title: 'Системы освещения',
      description: 'Проектирование и установка современных световых систем'
    },
    {
      icon: 'Shield',
      title: 'Системы безопасности',
      description: 'Монтаж охранных и пожарных сигнализаций'
    },
    {
      icon: 'Zap',
      title: 'Слаботочные системы',
      description: 'Интернет, телефония, видеонаблюдение, умный дом'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Гарантия качества',
      description: '5 лет гарантии на все виды работ и используемые материалы'
    },
    {
      icon: 'Sparkles',
      title: 'Идеальная чистота',
      description: 'Убираем за собой до блеска — никаких следов работы'
    },
    {
      icon: 'Clock',
      title: 'Точность сроков',
      description: 'Выполняем работы строго по графику, без задержек'
    },
    {
      icon: 'Users',
      title: 'Опытные мастера',
      description: 'Сертифицированные специалисты с опытом более 10 лет'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/e43170ff-60f7-4a52-8787-9901b0ce323b/files/b8c9d0b2-80bc-4624-9fa5-ae658664cfac.jpg',
      title: 'Премиальные апартаменты',
      description: 'Полный электромонтаж элитной квартиры 180 м²'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e43170ff-60f7-4a52-8787-9901b0ce323b/files/0bb087e0-14f2-4af9-abeb-7dcf82eec2e6.jpg',
      title: 'Современный щитовой узел',
      description: 'Монтаж и организация электрощитовой'
    },
    {
      image: 'https://cdn.poehali.dev/projects/e43170ff-60f7-4a52-8787-9901b0ce323b/files/d07afbeb-b62a-4285-b69a-b21e5b28884e.jpg',
      title: 'Идеальная чистота',
      description: 'Качественная работа без пыли и грязи'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-accent" size={32} />
            <span className="text-2xl font-bold text-primary">ЭлектроПремиум</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
            <a href="#advantages" className="text-foreground hover:text-accent transition-colors">Преимущества</a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">Портфолио</a>
            <a href="#testimonials" className="text-foreground hover:text-accent transition-colors">Отзывы</a>
            <a href="#calculator" className="text-foreground hover:text-accent transition-colors">Калькулятор</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden lg:flex bg-accent hover:bg-accent/90 text-accent-foreground">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#services" 
                    className="text-lg font-semibold hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="#advantages" 
                    className="text-lg font-semibold hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Преимущества
                  </a>
                  <a 
                    href="#portfolio" 
                    className="text-lg font-semibold hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Портфолио
                  </a>
                  <a 
                    href="#testimonials" 
                    className="text-lg font-semibold hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Отзывы
                  </a>
                  <a 
                    href="#calculator" 
                    className="text-lg font-semibold hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Калькулятор
                  </a>
                  <a 
                    href="#contact" 
                    className="text-lg font-semibold hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <Button className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Phone" size={18} className="mr-2" />
                    +7 (999) 123-45-67
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  Премиальный сервис
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Электромонтаж
                <span className="block text-accent">премиум-класса</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Выполняем электромонтажные работы любой сложности с гарантией качества и идеальной чистотой после себя
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-4xl font-bold text-accent">5 лет</div>
                  <div className="text-sm text-muted-foreground">гарантии</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">чистота</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/e43170ff-60f7-4a52-8787-9901b0ce323b/files/b8c9d0b2-80bc-4624-9fa5-ae658664cfac.jpg" 
                alt="Премиальный электромонтаж"
                className="rounded-2xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр электромонтажных работ для любых объектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon name={service.icon} size={32} className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы не просто выполняем работу — мы создаём безупречный результат
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon name={advantage.icon} size={36} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры выполненных проектов премиум-класса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/90">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши заказчики
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-muted-foreground">
              Рассчитайте примерную стоимость электромонтажных работ
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold mb-3">Тип объекта</label>
                  <Select 
                    value={calcData.objectType} 
                    onValueChange={(value) => setCalcData({...calcData, objectType: value})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Квартира</SelectItem>
                      <SelectItem value="house">Загородный дом</SelectItem>
                      <SelectItem value="commercial">Коммерческий объект</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Площадь объекта: {calcData.area} м²
                  </label>
                  <Slider
                    value={[calcData.area]}
                    onValueChange={(value) => setCalcData({...calcData, area: value[0]})}
                    min={20}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>20 м²</span>
                    <span>500 м²</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Количество комнат/помещений: {calcData.rooms}
                  </label>
                  <Slider
                    value={[calcData.rooms]}
                    onValueChange={(value) => setCalcData({...calcData, rooms: value[0]})}
                    min={1}
                    max={20}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1</span>
                    <span>20</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-semibold">Проектирование</div>
                    <div className="text-sm text-muted-foreground">Разработка схемы электроснабжения</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={calcData.includeDesign}
                      onChange={(e) => setCalcData({...calcData, includeDesign: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                  </label>
                </div>

                <div className="border-t pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Примерная стоимость работ</div>
                      <div className="text-4xl font-bold text-accent">
                        {calculatePrice().toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <Icon name="Calculator" size={48} className="text-accent/20" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    * Итоговая стоимость зависит от сложности работ и используемых материалов. 
                    Для точного расчёта оставьте заявку на консультацию.
                  </p>
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Получить точный расчёт
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Получить консультацию</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и наш специалист свяжется с вами в течение 15 минут
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <a href="tel:+79991234567" className="text-lg text-accent hover:underline">+7 (999) 123-45-67</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:info@electropremium.ru" className="text-lg text-accent hover:underline">info@electropremium.ru</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-lg text-muted-foreground">Москва, ул. Примерная, д. 1</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-accent" size={28} />
                <span className="text-xl font-bold">ЭлектроПремиум</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Премиальные электромонтажные работы с гарантией качества
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>Квартиры и дома</li>
                <li>Коммерческие объекты</li>
                <li>Промышленные объекты</li>
                <li>Системы освещения</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (999) 123-45-67</li>
                <li>info@electropremium.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 ЭлектроПремиум. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;