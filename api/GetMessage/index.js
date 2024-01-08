module.exports = async function (context, req) {
  const date = "2024-01-08T02:24:27.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

