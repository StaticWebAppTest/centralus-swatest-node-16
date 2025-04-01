module.exports = async function (context, req) {
  const date = "2025-04-01T17:12:32.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

