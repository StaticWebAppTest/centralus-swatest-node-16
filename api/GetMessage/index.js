module.exports = async function (context, req) {
  const date = "2025-05-06T17:11:58.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

