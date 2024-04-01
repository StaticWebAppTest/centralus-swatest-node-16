module.exports = async function (context, req) {
  const date = "2024-04-01T09:10:38.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

