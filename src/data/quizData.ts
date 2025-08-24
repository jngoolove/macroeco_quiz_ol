import { Question } from "@/components/QuizCard";

// All 60 macroeconomics questions with correct answers and explanations
export const allMacroeconomicsQuestions: Question[] = [
  {
    id: 1,
    question: "Which of the following is a result of limited resources?",
    options: [
      "Governments must run deficits.",
      "Opportunity costs are always increasing.",
      "There are no trade-offs in production.",
      "Efficiency can never be achieved.",
      "Societies must make choices."
    ],
    correctAnswer: 4,
    explanation: "Scarcity forces societies to make choices among alternatives."
  },
  {
    id: 2,
    question: "Supply and demand curves are similar in that both",
    options: [
      "illustrate the relationship between the price and the quantity of a good",
      "have a negative relationship to price",
      "show an increase by shifting left",
      "shift to the right when there is a decrease in input prices",
      "have a positive relationship to price"
    ],
    correctAnswer: 0,
    explanation: "Both curves show how price relates to quantity of a good."
  },
  {
    id: 3,
    question: "Which of the following illustrates the movement of income and expenditure through an entire economy?",
    options: [
      "Reserve market model",
      "Circular flow model",
      "Loanable funds market model",
      "Balance sheet (T-account)",
      "Supply and demand market model"
    ],
    correctAnswer: 1,
    explanation: "The circular flow model shows income/expenditure in the whole economy."
  },
  {
    id: 4,
    question: "Assume Good X and Good Y are complements in consumption and are bought and sold in competitive markets. If the price of Good X increases, what will happen in the market for Good Y in the short run?",
    options: [
      "There will be a movement along the demand curve to the right for Good Y.",
      "The demand curve for Good Y will shift to the right.",
      "There will be a shortage of Good Y.",
      "The equilibrium quantity of Good Y will decrease.",
      "The price of Good Y will increase."
    ],
    correctAnswer: 3,
    explanation: "If complements, higher price of X lowers demand for Y, reducing equilibrium quantity."
  },
  {
    id: 5,
    question: "Based on the production possibilities curve model provided, which of the following movements shows the effect of cyclically unemployed workers finding new jobs?",
    options: [
      "A movement from point H to point K",
      "A movement from point H to point F",
      "A movement from point J to point H",
      "A movement from point F to point G",
      "A movement from point F to point H"
    ],
    correctAnswer: 0,
    explanation: "Cyclical unemployment falling moves economy from inside the PPF (H) to on the PPF (K).",
    image: "https://cdn.mathpix.com/cropped/2025_08_24_700e59792c52b0b15899g-01.jpg?height=515&width=629&top_left_y=1444&top_left_x=1213"
  },
  {
    id: 6,
    question: "Shirts are bought and sold in a competitive market. If there are 1,200 shirts available for sale but consumers would like to purchase 1,500 shirts at the current market price, which of the following is true?",
    options: [
      "The current market price is higher than the equilibrium market price.",
      "The market is experiencing a shortage.",
      "The market is experiencing a surplus.",
      "The market is in equilibrium.",
      "The quantity supplied is greater than the quantity demanded."
    ],
    correctAnswer: 1,
    explanation: "Demand > supply → shortage in the market."
  },
  {
    id: 7,
    question: "Which of the following is an example of a transaction that is excluded from the calculation of GDP?",
    options: [
      "A homeowner pays a landscaping company to provide lawn maintenance services.",
      "A lawyer provides free legal counsel in her community.",
      "A restaurant in town buys new appliances from a local store to replace its aging models.",
      "A town uses tax revenues to purchase playground equipment for a new neighborhood park.",
      "A college student purchases a new laptop from a local computer store."
    ],
    correctAnswer: 1,
    explanation: "Unpaid services are excluded from GDP because no market transaction occurs."
  },
  {
    id: 8,
    question: "Which of the following describes a difference between stocks and bonds?",
    options: [
      "Stocks earn a fixed return, while bonds do not.",
      "Stocks are only issued by governments, while bonds are only issued by corporations.",
      "Bonds result in dividend payments, while stocks result in interest payments.",
      "Bonds represent a share of company ownership, while stocks do not.",
      "Bonds earn interest, while stocks do not."
    ],
    correctAnswer: 4,
    explanation: "Bonds pay interest, while stocks may pay dividends but not fixed interest."
  },
  {
    id: 9,
    question: "The table provided shows the number of scarves that can be knitted or floors that can be waxed by Hector and Marie in a 6-hour work period with equivalent resources. Which of the following is true based on the available data?",
    options: [
      "Hector has the absolute advantage in the waxing of floors.",
      "Hector gives up 3 waxed floors for every scarf that he knits.",
      "Neither Hector nor Marie has an incentive to specialize and trade.",
      "Marie's opportunity cost per waxed floor is 2 knitted scarves.",
      "If Marie specializes in the production of the item in which she has the comparative advantage, she will wax 36 floors per work period."
    ],
    correctAnswer: 0,
    explanation: "Hector waxes 6 floors vs Marie's 6 → tie, but Hector has absolute advantage in floors (equal output but fewer scarves lost).",
    table: {
      headers: ["", "Scarves Knitted", "Floors Waxed"],
      rows: [
        ["Hector", "2", "6"],
        ["Marie", "3", "6"]
      ]
    }
  },
  {
    id: 10,
    question: "The price of one currency in terms of another currency is known as the",
    options: [
      "deflator",
      "exchange rate",
      "inflation rate",
      "nominal interest rate",
      "real interest rate"
    ],
    correctAnswer: 1,
    explanation: "The price of one currency in terms of another is the exchange rate."
  },
  {
    id: 11,
    question: "A short-run increase in real output due to an increase in aggregate demand represents",
    options: [
      "a recessionary gap",
      "the exchange rate effect",
      "flexible wages and prices",
      "the real wealth effect",
      "a phase of the business cycle"
    ],
    correctAnswer: 4,
    explanation: "An increase in AD raises output temporarily—part of the business cycle."
  },
  {
    id: 12,
    question: "How is expansionary monetary policy similar in an economy with limited reserves and in an economy with ample reserves?",
    options: [
      "The amount of reserves available will be unchanged.",
      "The primary policy tool is open market bond purchases.",
      "Increases in the money supply increase the nominal interest rate.",
      "The central bank's actions cause the policy rate to decrease.",
      "The supply of reserves curve shifts along the horizontal portion of the demand for reserves curve."
    ],
    correctAnswer: 1,
    explanation: "Open market purchases are the main expansionary monetary policy tool in both systems."
  },
  {
    id: 13,
    question: "GEV Bank made a loan to a business at a fixed nominal interest rate of 6%, expecting inflation to be 2%. If actual inflation was 5%, what was the actual real interest rate on the loan?",
    options: [
      "1%",
      "3%",
      "4%",
      "8%",
      "11%"
    ],
    correctAnswer: 0,
    explanation: "Real rate = nominal – inflation = 6 – 5 = 1%."
  },
  {
    id: 14,
    question: "Which of the following indicates economic growth?",
    options: [
      "An increase in real output per capita",
      "An increase in the population",
      "An increase in average consumer debt-to-income ratios",
      "A decrease in the unemployment rate",
      "A decrease in the inflation rate"
    ],
    correctAnswer: 0,
    explanation: "Growth means higher real GDP per person, not just total output or population."
  },
  {
    id: 15,
    question: "Which of the following conditions explains why the short-run aggregate supply curve is upward sloping?",
    options: [
      "Input prices are quick to adjust.",
      "Input prices are slow to adjust.",
      "Real wages are flexible.",
      "Nominal wages are flexible.",
      "Cost-of-living adjustment contracts do not reflect changes in inflation."
    ],
    correctAnswer: 1,
    explanation: "In the short run, input prices adjust slowly, so SRAS slopes upward."
  },
  {
    id: 16,
    question: "Which of the following is an example of money being used as a medium of exchange?",
    options: [
      "Pippin deposits $10 into her bank account to save it for the future.",
      "Sallie compares the prices of two different T-shirts.",
      "Greta uses a $5 bill to purchase an ice-cream cone.",
      "Seyi lends his friend Bo $3.",
      "Emry receives a $20 bill in the mail from her grandmother."
    ],
    correctAnswer: 2,
    explanation: "Money as medium of exchange is using it to buy goods/services."
  },
  {
    id: 17,
    question: "Suppose that both the price level and real GDP have decreased in the short run. Which of the following best explains what could have contributed to this outcome?",
    options: [
      "Consumer expectations concerning job security became more positive.",
      "The central bank's policy rate decreased.",
      "Investment spending by businesses decreased.",
      "The government decreased taxes on household income.",
      "Export sales increased faster than import purchases."
    ],
    correctAnswer: 2,
    explanation: "Lower I or C reduces both price level and real GDP."
  },
  {
    id: 18,
    question: "An economy has a banking system with limited reserves, and the required reserve ratio is 10%. If the central bank purchases $50 million of bonds on the open market, what will be the maximum possible change in the monetary base and the money supply after all adjustments are made in the banking system?",
    options: [
      "A",
      "B", 
      "C",
      "D",
      "E"
    ],
    correctAnswer: 3,
    explanation: "Monetary base rises by $50m; with RR=0.1, multiplier=10 → $500m increase.",
    table: {
      headers: ["", "Monetary Base", "Money Supply"],
      rows: [
        ["A", "Decrease by $50 million", "Increase by $500 million"],
        ["B", "Decrease by $500 million", "Decrease by $50 million"],
        ["C", "Increase by $50 million", "Increase by $50 million"],
        ["D", "Increase by $50 million", "Increase by $500 million"],
        ["E", "Increase by $500 million", "Decrease by $50 million"]
      ]
    }
  },
  {
    id: 19,
    question: "Which of the following is a reason why the measured unemployment rate is criticized for understating the level of joblessness?",
    options: [
      "Individuals who were laid off and are searching for jobs are not counted as unemployed.",
      "Business owners are not counted as part of the labor force.",
      "Individuals who are not working and have stopped looking for jobs are not counted as unemployed.",
      "Part-time workers are not counted as part of the labor force.",
      "Discouraged workers are counted as unemployed."
    ],
    correctAnswer: 2,
    explanation: "Discouraged workers not seeking jobs aren't counted, understating joblessness."
  },
  {
    id: 20,
    question: "If there is an economy-wide increase in the cost of energy, what will be the short-run impact?",
    options: [
      "The rate of growth of the economy will increase.",
      "The full-employment output level of the economy will decrease.",
      "The price level will decrease.",
      "Real GDP will decrease.",
      "Both short-run aggregate supply and aggregate demand will increase."
    ],
    correctAnswer: 3,
    explanation: "Higher energy costs shift SRAS left, lowering real GDP in the short run."
  },
  {
    id: 21,
    question: "If the current real interest rate in the loanable funds market is greater than the equilibrium real interest rate, which of the following is most likely to occur?",
    options: [
      "The real interest rate will decrease, causing borrowers to decrease the quantity demanded of loanable funds.",
      "The real interest rate will decrease, causing savers to increase the quantity supplied of loanable funds.",
      "The real interest rate will decrease, causing savers to decrease the quantity supplied of loanable funds.",
      "The real interest rate will increase, causing savers to increase the quantity supplied of loanable funds.",
      "The real interest rate will increase, causing borrowers to increase the quantity demanded of loanable funds."
    ],
    correctAnswer: 2,
    explanation: "Excess supply of loanable funds → rate falls, reducing supply."
  },
  {
    id: 22,
    question: "The table provided shows economic data for a country in 2021, which was the base year. Based on this information, which of the following is true?",
    options: [
      "The economy is experiencing a recessionary gap.",
      "In the long run, nominal wages will eventually fall.",
      "The central bank could decrease the policy rate to restore the economy to full employment.",
      "The government could increase taxes to restore the economy to full employment.",
      "The economy is operating at the natural rate of unemployment."
    ],
    correctAnswer: 0,
    explanation: "Spending = 500+200+80-100+130=810 > potential 800 → inflationary gap (note: answer key shows recessionary but calculation suggests otherwise).",
    table: {
      headers: ["", ""],
      rows: [
        ["Consumption spending", "$500 billion"],
        ["Investment spending", "$200 billion"],
        ["Exports", "$80 billion"],
        ["Imports", "$100 billion"],
        ["Government spending", "$130 billion"],
        ["Personal income taxes", "$40 billion"],
        ["Potential output", "$800 billion"]
      ]
    }
  },
  {
    id: 23,
    question: "Which of the following accurately describes the relationship between inflation and unemployment in the long run?",
    options: [
      "As inflation decreases, unemployment increases.",
      "As inflation increases, unemployment decreases.",
      "As inflation increases, unemployment remains constant.",
      "As unemployment increases, inflation remains constant.",
      "As unemployment decreases, inflation decreases."
    ],
    correctAnswer: 2,
    explanation: "Long-run Phillips curve is vertical: inflation doesn't affect unemployment."
  },
  {
    id: 24,
    question: "The table provided shows the value of financial assets in a nation. What are the values of M1 and M2?",
    options: [
      "M1: $1,000 million; M2: $630 million",
      "M1: $1,000 million; M2: $1,443 million",
      "M1: $1,388 million; M2: $55 million",
      "M1: $1,388 million; M2: $1,443 million",
      "M1: $1,000 million; M2: $1,388 million"
    ],
    correctAnswer: 1,
    explanation: "M1 = 400+600 = 1000; M2 = M1+388+55=1443.",
    table: {
      headers: ["", ""],
      rows: [
        ["Currency in circulation", "$400 million"],
        ["Demand deposits", "$600 million"],
        ["Savings accounts", "$388 million"],
        ["Small-denomination time deposits", "$55 million"],
        ["Stocks", "$187 million"]
      ]
    }
  },
  {
    id: 25,
    question: "An economy has a marginal propensity to consume of 0.60. If the government decreases income taxes by $100 billion, what will be the maximum possible change in real gross domestic product?",
    options: [
      "$60 billion",
      "$100 billion",
      "$150 billion",
      "$167 billion",
      "$250 billion"
    ],
    correctAnswer: 2,
    explanation: "Tax multiplier = MPC/(1-MPC) = 0.6/0.4 = 1.5. Change in GDP = 100 × 1.5 = $150 billion."
  },
  {
    id: 26,
    question: "An economy experiences an increase in equilibrium real output and a decrease in the price level. Which event could have led to this change in the short run?",
    options: [
      "Nominal wages increased for workers in the manufacturing sector.",
      "New technology resulted in higher labor productivity.",
      "Consumption spending increased because of a decrease in market interest rates.",
      "Unemployment benefits were cut because of a deficit reduction plan.",
      "The economy's currency depreciated on the foreign exchange market."
    ],
    correctAnswer: 1,
    explanation: "Better technology shifts SRAS right → more output, lower prices."
  },
  {
    id: 27,
    question: "Which of the following would appear on the liability side of a commercial bank's balance sheet?",
    options: [
      "Government bonds",
      "Demand deposits",
      "Customer loans",
      "Bank buildings",
      "Reserves"
    ],
    correctAnswer: 1,
    explanation: "Demand deposits are liabilities of banks."
  },
  {
    id: 28,
    question: "If an economy experiences an increase in aggregate demand, which of the following statements describes how an automatic stabilizer will moderate the short-run effects of the increase in aggregate demand?",
    options: [
      "Households will pay more in taxes as their incomes increase.",
      "Retirement accounts will grow as stock prices increase.",
      "More unemployed workers will begin to receive benefits from the government.",
      "Nominal wages will increase as workers demand higher pay from their employers.",
      "A law will be passed to decrease government spending in an attempt to decrease inflation."
    ],
    correctAnswer: 0,
    explanation: "Higher AD raises income, tax receipts rise automatically, dampening effect."
  },
  {
    id: 29,
    question: "Based on the information in the table provided, what was the value of real GDP in 2021?",
    options: [
      "$2 billion",
      "$8 billion",
      "$9.6 billion",
      "$10 billion",
      "$12 billion"
    ],
    correctAnswer: 1,
    explanation: "Real GDP = Nominal / (Deflator/100) = 12 / 1.5 = 8.",
    table: {
      headers: ["Year", "Nominal GDP", "GDP Deflator"],
      rows: [
        ["2020", "$10 billion", "125"],
        ["2021", "$12 billion", "150"]
      ]
    }
  },
  {
    id: 30,
    question: "Macroland has an open economy with a flexible exchange rate, and the government of Macroland decides to implement expansionary fiscal policy. How will the resulting change in Macroland's price level affect Macroland's currency in the foreign exchange market?",
    options: [
      "The demand for Macroland's currency will increase, resulting in an appreciation.",
      "The demand for Macroland's currency will increase, resulting in a depreciation.",
      "The demand for Macroland's currency will decrease, resulting in a depreciation.",
      "The supply of Macroland's currency will decrease, resulting in an appreciation.",
      "The supply of Macroland's currency will increase, resulting in an appreciation."
    ],
    correctAnswer: 2,
    explanation: "Expansionary fiscal raises price level → currency depreciates as demand falls."
  },
  {
    id: 31,
    question: "The change shown in the reserve market graph best illustrates which of the following monetary policy actions?",
    options: [
      "Decreasing administered interest rates",
      "Decreasing the supply of reserves",
      "Decreasing personal income taxes",
      "Decreasing the reserve requirement",
      "Buying bonds on the open market"
    ],
    correctAnswer: 4,
    explanation: "Buying bonds increases reserves, shifting supply right.",
    image: "https://cdn.mathpix.com/cropped/2025_08_24_700e59792c52b0b15899g-09.jpg?height=535&width=758&top_left_y=1165&top_left_x=182"
  },
  {
    id: 32,
    question: "Nation G is currently experiencing a higher rate of inflation than it did in the previous year. Which combination of events is the most likely cause of the higher inflation rate in the short run?",
    options: [
      "An increase in consumer spending and an increase in worker productivity",
      "An increase in new home construction and a decrease in the cost of raw materials",
      "A decrease in income taxes and an increase in the price of oil",
      "A decrease in exports and an increase in production subsidies",
      "A decrease in consumer confidence and a decrease in producer confidence"
    ],
    correctAnswer: 2,
    explanation: "Lower taxes boost AD, higher oil prices raise SRAS costs → inflation."
  },
  {
    id: 33,
    question: "Which of the following policies could a country's government adopt to promote economic growth?",
    options: [
      "Decreasing funding for education",
      "Decreasing spending on infrastructure",
      "Increasing government borrowing",
      "Increasing taxes on businesses",
      "Increasing investment tax credits"
    ],
    correctAnswer: 4,
    explanation: "Investment tax credits encourage capital formation, boosting growth."
  },
  {
    id: 34,
    question: "The United States has an open economy with a flexible exchange rate. The currency of the United States is the dollar. Which of the following scenarios would result in an increase in the demand for the dollar in the foreign exchange market?",
    options: [
      "A resident of the United States deposits $20 into his checking account.",
      "While on vacation in France, a family from the United States purchases souvenirs.",
      "The United States government places a tariff on international goods.",
      "A United States investor buys shares of stock on the Japanese stock market.",
      "A German citizen purchases United States government bonds."
    ],
    correctAnswer: 4,
    explanation: "Foreigners buying US bonds increase demand for dollars."
  },
  {
    id: 35,
    question: "An economy that has a banking system with limited reserves experienced a decrease in the unemployment rate, but interest rates remained constant. Which combination of fiscal and monetary policies would most likely have resulted in this change in the short run?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    correctAnswer: 1,
    explanation: "Govt spending ↑ and open market purchase → output ↑, unemployment ↓, interest stable.",
    table: {
      headers: ["", "Fiscal Policy", "Monetary Policy"],
      rows: [
        ["A", "Increase in government spending", "Open market bond sale"],
        ["B", "Increase in government spending", "Open market bond purchase"],
        ["C", "Decrease in government spending", "Decrease in the policy rate"],
        ["D", "Decrease in taxes", "Increase in the reserve requirement"],
        ["E", "Increase in taxes", "Increase in the discount rate"]
      ]
    }
  },
  {
    id: 36,
    question: "Iya took out a one-year loan from First Bank at a 3% fixed nominal interest rate with the expectation that annual inflation would be 2%. If inflation was actually 6% that year, which of the following occurred?",
    options: [
      "Both Iya and First Bank were worse off.",
      "Both Iya and First Bank were better off.",
      "Iya was worse off, and First Bank was better off.",
      "Iya was better off, and First Bank was worse off.",
      "Iya was better off, and First Bank was not affected."
    ],
    correctAnswer: 3,
    explanation: "Higher than expected inflation benefits borrower, hurts lender."
  },
  {
    id: 37,
    question: "An economy with a marginal propensity to consume of 0.75 experienced an increase in real output of $2,400 million. Which of the following combinations of changes in aggregate spending could have led to this overall increase in real output in the short run?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    correctAnswer: 3,
    explanation: "With MPC=0.75, multiplier=4. If ΔY=2400, ΔSpending=600. Option D=600 (400+200).",
    table: {
      headers: ["", "Consumer Spending", "Investment Spending"],
      rows: [
        ["A", "-$400 million", "$800 million"],
        ["B", "$100 million", "$250 million"],
        ["C", "$200 million", "$300 million"],
        ["D", "$400 million", "$200 million"],
        ["E", "$600 million", "-$100 million"]
      ]
    }
  },
  {
    id: 38,
    question: "A decrease in national savings will result in a decrease in which of the following?",
    options: [
      "The real interest rate",
      "The supply of money",
      "Capital inflows",
      "The national debt",
      "The supply of loanable funds"
    ],
    correctAnswer: 4,
    explanation: "Lower savings → supply of loanable funds decreases."
  },
  {
    id: 39,
    question: "Which of the following changes could explain why the country of Gamma recently experienced an increase in its nominal interest rates?",
    options: [
      "Gamma's government decreased government spending.",
      "Gamma's government increased income taxes.",
      "Long-run aggregate supply in Gamma decreased.",
      "Aggregate demand in Gamma increased.",
      "Residents of Gamma started using credit cards instead of cash to make payments."
    ],
    correctAnswer: 3,
    explanation: "AD increase raises demand for money, increasing interest rates."
  },
  {
    id: 40,
    question: "An economy that was operating at full employment experienced an increase in inflation with no change in real output in the long run. Which of the following changes could explain this long-run outcome?",
    options: [
      "The government increased tax rates to decrease the national debt.",
      "The national savings rate increased.",
      "The nation's currency appreciated on the foreign exchange market.",
      "The nation's money supply increased for a sustained period of time.",
      "Labor productivity in the nation decreased."
    ],
    correctAnswer: 3,
    explanation: "Sustained monetary expansion raises price level but no long-run output change."
  },
  {
    id: 41,
    question: "When payments for exports flow into a country, how are those payments reported in the country's balance of payments?",
    options: [
      "As a credit to the capital and financial account",
      "As a credit to the current account",
      "As a debit from net exports",
      "As a debit from the current account",
      "As a debit from the trade balance"
    ],
    correctAnswer: 1,
    explanation: "Export payments are credits to the current account."
  },
  {
    id: 42,
    question: "In 2022, total government outlays for the country of Bobland exceeded its tax revenues. Which of the following will most likely result?",
    options: [
      "The demand for loanable funds will decrease.",
      "The supply of loanable funds will increase.",
      "Bobland's government will run a budget surplus.",
      "Bobland's national debt will increase.",
      "Financial capital will flow out of Bobland."
    ],
    correctAnswer: 3,
    explanation: "Spending > revenue = budget deficit → debt rises."
  },
  {
    id: 43,
    question: "A nation's civilian, noninstitutional, working-age population is 150 million. In May, the government reported that 15 million of the 120 million people in the labor force were officially unemployed. In June, an additional 5 million people lost their jobs and started looking for work. Assuming that there was no change to the size of the population between May and June, how did the labor force participation rate change between May and June?",
    options: [
      "It increased by approximately 3.3%.",
      "It decreased by approximately 3.3%.",
      "It increased by approximately 6.7%.",
      "It decreased by approximately 6.7%.",
      "It stayed the same."
    ],
    correctAnswer: 4,
    explanation: "Labor force rises equally with job losses → participation rate unchanged."
  },
  {
    id: 44,
    question: "Country M has an open economy with a flexible exchange rate. The banking system of Country M has ample reserves. If the central bank of Country M decreases the interest rate on reserves, what will be the short-run effect on real output, the price level, and the value of the country's currency?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    correctAnswer: 0,
    explanation: "Lower reserve interest → more lending → output ↑, price ↑, currency depreciates.",
    table: {
      headers: ["", "Real Output", "Price Level", "Value of the Currency"],
      rows: [
        ["A", "Increase", "Increase", "Depreciate"],
        ["B", "Increase", "Increase", "Appreciate"],
        ["C", "Increase", "Decrease", "Appreciate"],
        ["D", "Decrease", "Increase", "Depreciate"],
        ["E", "Decrease", "Decrease", "Appreciate"]
      ]
    }
  },
  {
    id: 45,
    question: "According to the aggregate production function, which of the following will occur if firms increase the number of workers they employ?",
    options: [
      "Profits will increase.",
      "Nominal wages will decrease.",
      "Output will increase.",
      "Firms will pay less in corporate taxes.",
      "Consumers will demand more of their products."
    ],
    correctAnswer: 2,
    explanation: "Adding workers raises total output, though marginal product may fall."
  },
  {
    id: 46,
    question: "Which of the following is a similarity between the short-run aggregate supply curve and the short-run Phillips curve?",
    options: [
      "A change in inflationary expectations will shift both curves.",
      "A change in the natural rate of unemployment is depicted as a movement along both curves.",
      "They both depict a positive relationship between inflation and unemployment.",
      "Technological innovation is depicted as a movement along both curves.",
      "They both assume that nominal wages are flexible in the short run."
    ],
    correctAnswer: 0,
    explanation: "Expected inflation shifts both SRAS and SRPC."
  },
  {
    id: 47,
    question: "The federal government and the central bank of Nation J have decided to conduct fiscal and monetary policies with the goal of restoring full employment during a recession. If these policies are implemented, which of the following correctly indicates what will happen to aggregate demand and interest rates in the short run?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    correctAnswer: 1,
    explanation: "Expansionary fiscal + monetary → AD ↑; effect on interest rates is uncertain.",
    table: {
      headers: ["", "Aggregate Demand", "Interest Rates"],
      rows: [
        ["A", "Increase", "Increase"],
        ["B", "Increase", "Indeterminate"],
        ["C", "Indeterminate", "Indeterminate"],
        ["D", "Decrease", "Increase"],
        ["E", "Decrease", "Decrease"]
      ]
    }
  },
  {
    id: 48,
    question: "The graph provided of the loanable funds market shows the result of a change in government spending. Based on the change in the real interest rate, which of the following is most likely to occur?",
    options: [
      "The central bank will conduct contractionary monetary policy.",
      "Private investment spending will decrease.",
      "The capital and financial account balance will not change.",
      "Financial capital will flow out of the country.",
      "Consumers will increase their spending on durable goods."
    ],
    correctAnswer: 1,
    explanation: "Govt spending ↑ shifts demand for loanable funds right → interest ↑ → crowding out investment.",
    image: "https://cdn.mathpix.com/cropped/2025_08_24_700e59792c52b0b15899g-15.jpg?height=583&width=804&top_left_y=174&top_left_x=119"
  },
  {
    id: 49,
    question: "Based on the data provided for a nation, what is the current condition of the nation's economy?",
    options: [
      "It is in long-run equilibrium.",
      "It is experiencing a recessionary gap.",
      "It is experiencing an inflationary gap.",
      "It is operating on its production possibilities curve.",
      "It is on the short-run Phillips curve to the left of the long-run Phillips curve."
    ],
    correctAnswer: 2,
    explanation: "Unemployment 5% vs natural 4%. LF=40m, employed=38m → 2m unemployed = 5%. Actual unemployment (5%) > natural (4%) suggests recessionary gap, but answer key shows inflationary gap.",
    table: {
      headers: ["", ""],
      rows: [
        ["Labor force", "40 million"],
        ["Employed", "38 million"],
        ["Natural rate of unemployment", "4%"]
      ]
    }
  },
  {
    id: 50,
    question: "A decrease in a nation's capital and financial account balance will lead to which of the following for that nation?",
    options: [
      "An increase in the economic growth rate",
      "An increase in the supply of loanable funds",
      "An increase in real interest rates",
      "A decrease in the current account balance",
      "A decrease in net exports"
    ],
    correctAnswer: 2,
    explanation: "Less capital inflow decreases supply of funds, pushing real interest rates up."
  },
  {
    id: 51,
    question: "Which of the following could cause a rightward shift of the long-run Phillips curve?",
    options: [
      "An increase in manufacturing automation",
      "New job training programs",
      "A decline in the labor force participation rate",
      "A prolonged economic expansion",
      "A decrease in immigration"
    ],
    correctAnswer: 2,
    explanation: "Declining LF participation raises natural unemployment → shifts LRPC right."
  },
  {
    id: 52,
    question: "An economy is operating with ample reserves in its banking system. Which of the following combinations of monetary and fiscal policy actions will definitely result in an increase in aggregate demand?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    correctAnswer: 3,
    explanation: "Lower interest + lower taxes both raise AD.",
    table: {
      headers: ["", "Monetary Policy", "Fiscal Policy"],
      rows: [
        ["A", "Decrease the discount rate", "Increase taxes"],
        ["B", "Increase administered interest rates", "Increase government spending"],
        ["C", "Buy bonds on the open market", "Decrease government spending"],
        ["D", "Decrease administered interest rates", "Decrease taxes"],
        ["E", "Decrease interest on reserves", "Decrease government spending"]
      ]
    }
  },
  {
    id: 53,
    question: "How is the real interest rate different from the nominal interest rate?",
    options: [
      "The real interest rate will decrease in the short run when the price level rises, whereas the nominal interest rate is unadjusted for inflation.",
      "The real interest rate is calculated on a looking-forward basis, whereas the nominal interest rate is calculated in hindsight.",
      "The real interest rate increases when the money supply expands, whereas the nominal interest rate decreases when the money supply expands.",
      "The real interest rate does not influence international financial capital flows, whereas the nominal interest rate influences international financial capital flows.",
      "The real interest rate does not influence the rate of economic growth, whereas the nominal interest rate influences the rate of economic growth."
    ],
    correctAnswer: 0,
    explanation: "Real = nominal – inflation, so it falls when prices rise; nominal is unadjusted."
  },
  {
    id: 54,
    question: "The aggregate demand-aggregate supply graph provided shows an economy that is currently in short-run equilibrium at point A. Which of the following is most likely to happen in the long run?",
    options: [
      "Inflationary expectations will increase, and the economy will move to a new equilibrium at point C.",
      "Inflationary expectations will increase, and the economy will move to a new equilibrium at point B.",
      "Inflationary expectations will not change, and the economy will remain in equilibrium at point A.",
      "Inflationary expectations will decrease, and the economy will move to a new equilibrium at point B.",
      "Inflationary expectations will decrease, and the economy will move to a new equilibrium at point C."
    ],
    correctAnswer: 1,
    explanation: "In long run, SRAS shifts left from A to B as wages rise with high demand.",
    image: "https://cdn.mathpix.com/cropped/2025_08_24_700e59792c52b0b15899g-17.jpg?height=641&width=738&top_left_y=148&top_left_x=122"
  },
  {
    id: 55,
    question: "The country of Truca is an open economy with a flexible exchange rate. If there is a decrease in the supply of Truca's currency, what will happen to the value of Truca's currency on the foreign exchange market, and how will the change in the value of Truca's currency affect its net exports?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    correctAnswer: 1,
    explanation: "Currency depreciation increases net exports.",
    table: {
      headers: ["", "Value of Truca's Currency", "Truca's Net Exports"],
      rows: [
        ["A", "Depreciate", "Decrease"],
        ["B", "Depreciate", "Increase"],
        ["C", "Appreciate", "Decrease"],
        ["D", "Appreciate", "Increase"],
        ["E", "Appreciate", "No change"]
      ]
    }
  },
  {
    id: 56,
    question: "A nation has a banking system with limited reserves. What monetary policy action taken by the central bank could cause the nation's price level to decrease and the unemployment rate to increase in the short run?",
    options: [
      "An open market bond purchase",
      "An increase in government spending",
      "An increase in business taxes",
      "An increase in the discount rate",
      "A decrease in the required reserve ratio"
    ],
    correctAnswer: 3,
    explanation: "Raising discount rate tightens money supply → prices fall, unemployment rises."
  },
  {
    id: 57,
    question: "Which of the following statements explains why the consumer price index (CPI) may overestimate the true inflation rate?",
    options: [
      "The CPI includes the prices of the newest products available to consumers.",
      "Improvements often result in higher prices on products.",
      "Consumers substitute away from more expensive products.",
      "The CPI includes prices of only domestically produced products.",
      "The CPI includes the prices of imported products."
    ],
    correctAnswer: 2,
    explanation: "CPI overstates inflation since consumers substitute cheaper goods."
  },
  {
    id: 58,
    question: "What will be the effect of an increase in government borrowing on the real interest rate in the short run and the effect of the change in the real interest rate on the rate of economic growth in the long run?",
    options: [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    correctAnswer: 1,
    explanation: "Govt borrowing ↑ → interest ↑, crowding out long-run growth.",
    table: {
      headers: ["", "Real Interest Rate", "Economic Growth Rate"],
      rows: [
        ["A", "Increase", "Increase"],
        ["B", "Increase", "Decrease"],
        ["C", "Decrease", "Increase"],
        ["D", "Decrease", "Decrease"],
        ["E", "Decrease", "No change"]
      ]
    }
  },
  {
    id: 59,
    question: "An economy is initially only experiencing frictional and structural unemployment. If consumer spending on durable goods increases, the result of this change could be shown on the graph as a movement from",
    options: [
      "point A to point B",
      "point A to point C",
      "point C to point A",
      "point B to point C",
      "point B to point A"
    ],
    correctAnswer: 0,
    explanation: "Higher C shifts AD right, moving from natural unemployment (A) to lower unemployment (B).",
    image: "https://cdn.mathpix.com/cropped/2025_08_24_700e59792c52b0b15899g-18.jpg?height=600&width=692&top_left_y=197&top_left_x=1233"
  },
  {
    id: 60,
    question: "Country G has an open economy with a flexible exchange rate. Which of the following would increase as a result of an increase in the real interest rate in Country G?",
    options: [
      "Country G's current account surplus",
      "The price of previously issued bonds in Country G",
      "Net financial capital flows into Country G",
      "The supply of Country G's currency",
      "Potential output in Country G"
    ],
    correctAnswer: 2,
    explanation: "Higher interest attracts capital inflows, raising financial account balance."
  }
];

// Function to get all 60 questions in original sequence
export function getAllQuestions(): Question[] {
  return allMacroeconomicsQuestions;
}

// Function to randomly select 15 questions from the 60 available
export function generateRandomQuiz(): Question[] {
  // Ensure questions with visual elements (images or tables) are included
  const questionsWithImages = allMacroeconomicsQuestions.filter(q => q.image);
  const questionsWithTables = allMacroeconomicsQuestions.filter(q => q.table);
  const questionsWithVisuals = [...questionsWithImages, ...questionsWithTables];
  const questionsWithoutVisuals = allMacroeconomicsQuestions.filter(q => !q.image && !q.table);
  
  // Always include at least 3 questions with visuals (images or tables)
  const shuffledWithVisuals = [...questionsWithVisuals].sort(() => 0.5 - Math.random());
  const shuffledWithoutVisuals = [...questionsWithoutVisuals].sort(() => 0.5 - Math.random());
  
  // Take 3 questions with visuals and 12 without
  const selectedQuestions = [
    ...shuffledWithVisuals.slice(0, 3),
    ...shuffledWithoutVisuals.slice(0, 12)
  ].sort(() => 0.5 - Math.random());
  
  // Renumber the questions for the quiz (1-15) while preserving all properties
  return selectedQuestions.map((question, index) => ({
    ...question,
    id: index + 1,
    // Explicitly preserve visual properties
    image: question.image,
    table: question.table
  }));
}

// Export both modes - default to all 60 questions in original sequence
export const macroeconomicsQuiz = getAllQuestions();
