module.exports = async function (context, req) {
  const date = "2023-08-20T21:06:34.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

