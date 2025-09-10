module.exports = async function (context, req) {
  const date = "2025-09-10T09:13:33.271Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

