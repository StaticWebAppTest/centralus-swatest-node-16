module.exports = async function (context, req) {
  const date = "2024-01-22T11:08:14.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

