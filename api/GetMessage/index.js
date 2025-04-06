module.exports = async function (context, req) {
  const date = "2025-04-06T16:13:32.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

