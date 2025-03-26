module.exports = async function (context, req) {
  const date = "2025-03-26T23:11:54.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

