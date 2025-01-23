module.exports = async function (context, req) {
  const date = "2025-01-23T03:13:25.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

