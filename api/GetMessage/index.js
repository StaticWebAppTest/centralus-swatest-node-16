module.exports = async function (context, req) {
  const date = "2025-02-01T05:10:52.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

