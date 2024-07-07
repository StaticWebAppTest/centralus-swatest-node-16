module.exports = async function (context, req) {
  const date = "2024-07-07T10:09:26.883Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

