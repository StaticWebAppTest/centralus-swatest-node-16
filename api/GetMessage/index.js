module.exports = async function (context, req) {
  const date = "2025-04-02T09:13:54.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

