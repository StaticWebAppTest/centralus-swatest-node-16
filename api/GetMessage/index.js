module.exports = async function (context, req) {
  const date = "2025-04-15T12:25:30.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

