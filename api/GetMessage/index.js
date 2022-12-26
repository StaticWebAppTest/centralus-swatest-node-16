module.exports = async function (context, req) {
  const date = "2022-12-26T22:08:34.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

