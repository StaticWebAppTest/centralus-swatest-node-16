module.exports = async function (context, req) {
  const date = "2023-08-15T19:06:42.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

