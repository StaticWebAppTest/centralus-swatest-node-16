module.exports = async function (context, req) {
  const date = "2023-12-31T19:06:54.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

