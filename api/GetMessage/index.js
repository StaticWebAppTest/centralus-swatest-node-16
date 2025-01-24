module.exports = async function (context, req) {
  const date = "2025-01-24T16:13:52.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

