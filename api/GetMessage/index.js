module.exports = async function (context, req) {
  const date = "2023-07-16T10:09:24.849Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

