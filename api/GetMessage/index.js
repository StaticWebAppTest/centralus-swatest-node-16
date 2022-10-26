module.exports = async function (context, req) {
  const date = "2022-10-26T22:13:00.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

