module.exports = async function (context, req) {
  const date = "2024-06-25T23:09:58.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

