module.exports = async function (context, req) {
  const date = "2025-02-25T18:17:04.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

