module.exports = async function (context, req) {
  const date = "2025-02-09T16:12:26.184Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

