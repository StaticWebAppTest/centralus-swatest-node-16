module.exports = async function (context, req) {
  const date = "2024-12-05T08:17:15.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

