module.exports = async function (context, req) {
  const date = "2022-10-26T15:12:40.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

