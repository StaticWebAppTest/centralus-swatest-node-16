module.exports = async function (context, req) {
  const date = "2025-01-19T20:11:13.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

