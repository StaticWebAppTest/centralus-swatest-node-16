module.exports = async function (context, req) {
  const date = "2026-04-21T13:15:47.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

