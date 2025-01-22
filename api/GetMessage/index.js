module.exports = async function (context, req) {
  const date = "2025-01-22T17:11:15.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

