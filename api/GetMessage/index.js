module.exports = async function (context, req) {
  const date = "2023-11-25T22:08:00.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

