module.exports = async function (context, req) {
  const date = "2024-04-02T19:06:51.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

