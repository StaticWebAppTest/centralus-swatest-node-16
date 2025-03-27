module.exports = async function (context, req) {
  const date = "2025-03-27T20:13:33.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

