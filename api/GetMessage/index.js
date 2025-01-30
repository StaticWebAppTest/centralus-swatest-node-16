module.exports = async function (context, req) {
  const date = "2025-01-30T20:12:27.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

