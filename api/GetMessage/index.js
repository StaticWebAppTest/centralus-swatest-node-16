module.exports = async function (context, req) {
  const date = "2023-12-22T12:16:12.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

