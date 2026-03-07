module.exports = async function (context, req) {
  const date = "2026-03-07T11:14:16.350Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

