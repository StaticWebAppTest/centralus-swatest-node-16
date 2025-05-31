module.exports = async function (context, req) {
  const date = "2025-05-31T23:12:27.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

