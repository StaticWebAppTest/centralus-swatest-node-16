module.exports = async function (context, req) {
  const date = "2025-04-21T03:05:05.550Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

