module.exports = async function (context, req) {
  const date = "2025-05-06T05:13:41.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

