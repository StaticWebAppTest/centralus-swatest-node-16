module.exports = async function (context, req) {
  const date = "2023-08-02T19:07:04.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

