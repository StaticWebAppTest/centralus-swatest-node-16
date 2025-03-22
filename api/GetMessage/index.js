module.exports = async function (context, req) {
  const date = "2025-03-22T18:15:19.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

