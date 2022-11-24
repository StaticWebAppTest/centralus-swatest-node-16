module.exports = async function (context, req) {
  const date = "2022-11-24T20:10:24.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

