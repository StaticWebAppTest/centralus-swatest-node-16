module.exports = async function (context, req) {
  const date = "2025-04-26T12:22:20.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

