module.exports = async function (context, req) {
  const date = "2025-02-11T15:13:13.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

