module.exports = async function (context, req) {
  const date = "2025-05-12T19:10:55.537Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

