module.exports = async function (context, req) {
  const date = "2025-01-06T23:11:39.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

