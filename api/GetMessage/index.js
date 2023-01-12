module.exports = async function (context, req) {
  const date = "2023-01-12T11:12:01.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

