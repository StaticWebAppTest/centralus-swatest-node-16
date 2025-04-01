module.exports = async function (context, req) {
  const date = "2025-04-01T13:24:01.231Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

