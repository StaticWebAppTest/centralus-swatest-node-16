module.exports = async function (context, req) {
  const date = "2022-04-21T21:09:46.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

