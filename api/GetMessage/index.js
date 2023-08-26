module.exports = async function (context, req) {
  const date = "2023-08-26T07:07:13.566Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

