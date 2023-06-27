module.exports = async function (context, req) {
  const date = "2023-06-27T06:13:29.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

