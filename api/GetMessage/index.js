module.exports = async function (context, req) {
  const date = "2024-02-20T09:09:06.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

