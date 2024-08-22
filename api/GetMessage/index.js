module.exports = async function (context, req) {
  const date = "2024-08-22T06:14:52.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

