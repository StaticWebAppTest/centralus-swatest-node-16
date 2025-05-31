module.exports = async function (context, req) {
  const date = "2025-05-31T17:10:52.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

