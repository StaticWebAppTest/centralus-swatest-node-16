module.exports = async function (context, req) {
  const date = "2022-08-07T13:21:16.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

