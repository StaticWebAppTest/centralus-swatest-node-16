module.exports = async function (context, req) {
  const date = "2023-08-17T20:08:55.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

