module.exports = async function (context, req) {
  const date = "2025-09-21T21:10:25.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

