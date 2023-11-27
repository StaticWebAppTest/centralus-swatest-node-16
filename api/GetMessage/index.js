module.exports = async function (context, req) {
  const date = "2023-11-27T12:17:39.531Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

