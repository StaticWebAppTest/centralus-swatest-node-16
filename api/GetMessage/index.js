module.exports = async function (context, req) {
  const date = "2023-10-30T00:41:29.362Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

