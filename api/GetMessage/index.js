module.exports = async function (context, req) {
  const date = "2023-04-09T22:07:56.138Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

