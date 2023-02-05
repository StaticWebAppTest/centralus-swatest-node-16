module.exports = async function (context, req) {
  const date = "2023-02-05T18:10:38.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

