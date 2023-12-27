module.exports = async function (context, req) {
  const date = "2023-12-27T21:08:25.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

