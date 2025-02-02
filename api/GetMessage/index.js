module.exports = async function (context, req) {
  const date = "2025-02-02T05:11:32.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

