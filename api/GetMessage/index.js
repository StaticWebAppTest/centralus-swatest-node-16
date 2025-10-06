module.exports = async function (context, req) {
  const date = "2025-10-06T19:10:37.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

