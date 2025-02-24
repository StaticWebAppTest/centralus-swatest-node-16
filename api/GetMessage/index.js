module.exports = async function (context, req) {
  const date = "2025-02-24T21:11:04.768Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

