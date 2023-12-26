module.exports = async function (context, req) {
  const date = "2023-12-26T20:09:32.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

