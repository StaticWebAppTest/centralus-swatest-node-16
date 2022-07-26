module.exports = async function (context, req) {
  const date = "2022-07-26T22:10:25.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

