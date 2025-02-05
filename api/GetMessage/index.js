module.exports = async function (context, req) {
  const date = "2025-02-05T18:16:05.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

