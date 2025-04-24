module.exports = async function (context, req) {
  const date = "2025-04-24T19:10:12.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

