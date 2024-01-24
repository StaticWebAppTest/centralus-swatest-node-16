module.exports = async function (context, req) {
  const date = "2024-01-24T01:54:40.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

