module.exports = async function (context, req) {
  const date = "2025-04-24T04:15:29.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

