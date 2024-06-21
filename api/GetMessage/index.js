module.exports = async function (context, req) {
  const date = "2024-06-21T15:14:59.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

