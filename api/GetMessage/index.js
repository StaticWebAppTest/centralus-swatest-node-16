module.exports = async function (context, req) {
  const date = "2023-09-05T19:06:55.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

