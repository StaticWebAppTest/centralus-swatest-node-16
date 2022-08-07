module.exports = async function (context, req) {
  const date = "2022-08-07T16:13:14.554Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

