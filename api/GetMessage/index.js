module.exports = async function (context, req) {
  const date = "2024-02-22T19:06:43.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

