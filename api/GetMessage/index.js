module.exports = async function (context, req) {
  const date = "2025-12-09T16:19:58.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

