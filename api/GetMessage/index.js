module.exports = async function (context, req) {
  const date = "2025-02-16T05:11:38.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

