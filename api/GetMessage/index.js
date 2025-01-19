module.exports = async function (context, req) {
  const date = "2025-01-19T10:11:46.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

