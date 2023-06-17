module.exports = async function (context, req) {
  const date = "2023-06-17T03:09:53.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

