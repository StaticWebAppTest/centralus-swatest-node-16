module.exports = async function (context, req) {
  const date = "2025-11-21T20:15:27.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

