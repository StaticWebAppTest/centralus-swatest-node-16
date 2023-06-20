module.exports = async function (context, req) {
  const date = "2023-06-20T21:07:04.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

