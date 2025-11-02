module.exports = async function (context, req) {
  const date = "2025-11-02T05:12:57.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

