module.exports = async function (context, req) {
  const date = "2025-07-26T08:17:38.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

