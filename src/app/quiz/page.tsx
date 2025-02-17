"use client";
import { useState } from "react";
import { questions } from "../data/questions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { mushrooms } from "../data/mushrooms";

const MushroomQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Option[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<Mushroom | null>(null);

  const handleAnswer = (option: Option): void => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: Option[]): void => {
    const initialScores: Record<string, number> = {
      shiitake: 0,
      shimeji: 0,
      enoki: 0,
      kikurage: 0,
      matsutake: 0,
      eringi: 0,
    };

    const scores = finalAnswers.reduce<Record<string, number>>((acc, answer) => {
      Object.entries(answer.score).forEach(([mushroom, score]) => {
        acc[mushroom] = (acc[mushroom] || 0) + score;
      });
      return acc;
    }, initialScores);

    const maxTrait = Object.entries(scores).reduce((max, current) =>
      current[1] > max[1] ? current : max
    );

    const maxAnswer = mushrooms.find((mushroom) => mushroom.name === maxTrait[0]) || mushrooms[0];
    setResults(maxAnswer);
    setShowResults(true);
  };

  const resetQuiz = (): void => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setResults(null);
  };


  return (
    <Card className="w-full mx-auto sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl px-4">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {showResults ? "Your Personality Results" : "Which Mushroom are you Quiz"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!showResults ? (
          <div className="space-y-6">
            <Progress
              value={(currentQuestion / questions.length) * 100}
              className="w-full"
            />

            <div className="text-lg font-medium mb-4">
              {questions[currentQuestion].text}
            </div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="text-wrap w-full text-left justify-start h-auto py-3"
                  onClick={() => handleAnswer(option)}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 justify-center items-center">
                <div className="flex flex-row space-x-1">
                  <span className="text-lg font-medium mb-4">You are</span>
                  <span className="text-lg font-bold mb-4 capitalize">
                    {results?.name}
                  </span>
                </div>

                {results && (
                  <Image
                    src={`/${results.name}.png`}
                    alt={`${results.name} mushroom`}
                    width={300}
                    height={300}
                    priority
                  />
                )}

                <span className="text-sm mb-4 block pl-4 leading-relaxed">
                  {results?.description}
                </span>

                <span className="text-lg font-medium mb-4">Your matches are</span>
                
                <ul className="flex flex-row items-center space-x-4">
                  {results?.match.map((trait, index) => (
                    <li
                      key={index}
                      className="capitalize border-0 text-center h-[150px]"
                    >
                      {trait}
                      <Image
                        src={`/${trait}.png`}
                        alt={`${trait} match`}
                        width={100}
                        height={100}
                        priority
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Button onClick={resetQuiz} className="w-full mt-6">
              Take Quiz Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MushroomQuiz;
