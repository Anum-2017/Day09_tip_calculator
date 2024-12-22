"use client"; 

import { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };

  const handleTipPercentageChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setTipPercentage(parseFloat(e.target.value));
  };

  const calculateTip = (): void => {
    if (billAmount !== null && tipPercentage !== null) {
      const tip = billAmount * (tipPercentage / 100);
      setTipAmount(tip);
      setTotalAmount(billAmount + tip); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Center the tip calculator card within the screen */}
      <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          {/* Header with title and description */}
          <CardTitle className="text-center">Tip Calculator</CardTitle>
          <CardDescription className="text-center mt-4">
            Enter the bill amount and tip percentage to calculate the tip and total.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Input for bill amount */}
          <div className="grid gap-2">
            <Label htmlFor="bill-amount" className="font-bold">Bill Amount :</Label>
            <Input
              id="bill-amount"
              type="number"
              placeholder="Enter bill amount"
              value={billAmount !== null ? billAmount : ""}
              onChange={handleBillAmountChange}
            />
          </div>
          {/* Input for tip percentage */}
          <div className="grid gap-2">
            <Label htmlFor="tip-percentage" className="font-bold">Tip Percentage :</Label>
            <Input
              id="tip-percentage"
              type="number"
              placeholder="Enter tip percentage"
              value={tipPercentage !== null ? tipPercentage : ""}
              onChange={handleTipPercentageChange}
            />
          </div>
          {/* Button to calculate tip */}
          <Button onClick={calculateTip}>Calculate</Button>
        </CardContent>
        <CardFooter className="grid gap-2">
          {/* Display the calculated tip amount */}
          <div className="flex items-center justify-between font-bold">
            <span>Tip Amount:</span>
            <span className="font-bold">${tipAmount.toFixed(2)}</span>
          </div>
          {/* Display the calculated total amount */}
          <div className="flex items-center justify-between font-bold">
            <span>Total Amount:</span>
            <span className="font-bold">${totalAmount.toFixed(2)}</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}