module.exports = async function (context, req) {
  const date = "2023-08-05T15:07:37.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

