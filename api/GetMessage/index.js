module.exports = async function (context, req) {
  const date = "2025-01-30T17:10:13.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

