module.exports = async function (context, req) {
  const date = "2024-02-16T06:11:49.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

