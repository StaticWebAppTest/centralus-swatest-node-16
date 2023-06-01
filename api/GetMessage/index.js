module.exports = async function (context, req) {
  const date = "2023-06-01T22:08:07.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

