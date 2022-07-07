module.exports = async function (context, req) {
  const date = "2022-07-07T08:24:34.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

