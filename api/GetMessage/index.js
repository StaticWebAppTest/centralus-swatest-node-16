module.exports = async function (context, req) {
  const date = "2025-02-26T04:15:10.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

