module.exports = async function (context, req) {
  const date = "2025-01-02T05:11:40.434Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

