module.exports = async function (context, req) {
  const date = "2025-02-07T19:09:00.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

