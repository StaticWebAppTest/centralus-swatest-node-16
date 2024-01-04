module.exports = async function (context, req) {
  const date = "2024-01-04T07:08:45.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

