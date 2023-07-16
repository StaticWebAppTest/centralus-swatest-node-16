module.exports = async function (context, req) {
  const date = "2023-07-16T12:17:24.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

