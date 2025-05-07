module.exports = async function (context, req) {
  const date = "2025-05-07T11:11:42.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

