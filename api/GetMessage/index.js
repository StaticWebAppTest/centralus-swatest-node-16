module.exports = async function (context, req) {
  const date = "2024-01-01T01:57:57.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

