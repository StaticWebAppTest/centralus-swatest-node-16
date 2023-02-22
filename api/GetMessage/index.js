module.exports = async function (context, req) {
  const date = "2023-02-22T06:13:15.784Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

