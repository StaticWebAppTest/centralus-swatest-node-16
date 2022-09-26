module.exports = async function (context, req) {
  const date = "2022-09-26T07:29:24.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

