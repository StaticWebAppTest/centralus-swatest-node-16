module.exports = async function (context, req) {
  const date = "2023-02-28T05:09:56.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

