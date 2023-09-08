module.exports = async function (context, req) {
  const date = "2023-09-08T19:06:43.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

