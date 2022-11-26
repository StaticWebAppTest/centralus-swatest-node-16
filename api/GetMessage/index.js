module.exports = async function (context, req) {
  const date = "2022-11-26T10:09:43.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

