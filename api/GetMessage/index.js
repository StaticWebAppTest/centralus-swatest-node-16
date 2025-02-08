module.exports = async function (context, req) {
  const date = "2025-02-08T08:13:38.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

