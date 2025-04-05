module.exports = async function (context, req) {
  const date = "2025-04-05T07:11:24.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

