module.exports = async function (context, req) {
  const date = "2024-11-12T21:10:27.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

