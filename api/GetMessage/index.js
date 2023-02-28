module.exports = async function (context, req) {
  const date = "2023-02-28T00:53:40.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

