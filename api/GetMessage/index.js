module.exports = async function (context, req) {
  const date = "2025-02-18T12:23:12.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

