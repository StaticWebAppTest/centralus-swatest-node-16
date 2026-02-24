module.exports = async function (context, req) {
  const date = "2026-02-24T04:11:52.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

