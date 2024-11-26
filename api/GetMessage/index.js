module.exports = async function (context, req) {
  const date = "2024-11-26T11:10:29.299Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

