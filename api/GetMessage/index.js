module.exports = async function (context, req) {
  const date = "2023-07-21T11:07:19.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

