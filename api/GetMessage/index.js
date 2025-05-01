module.exports = async function (context, req) {
  const date = "2025-05-01T17:11:44.823Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

