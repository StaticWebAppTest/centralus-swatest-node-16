module.exports = async function (context, req) {
  const date = "2025-01-01T01:02:12.196Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

