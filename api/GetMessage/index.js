module.exports = async function (context, req) {
  const date = "2025-01-02T18:16:02.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

