module.exports = async function (context, req) {
  const date = "2024-08-26T21:09:39.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

