module.exports = async function (context, req) {
  const date = "2022-07-11T03:26:43.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

