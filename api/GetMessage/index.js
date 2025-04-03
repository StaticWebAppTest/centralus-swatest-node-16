module.exports = async function (context, req) {
  const date = "2025-04-03T23:13:05.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

