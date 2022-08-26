module.exports = async function (context, req) {
  const date = "2022-08-26T07:16:52.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

