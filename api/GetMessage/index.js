module.exports = async function (context, req) {
  const date = "2025-04-01T21:11:56.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

