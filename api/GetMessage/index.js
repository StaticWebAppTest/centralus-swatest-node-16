module.exports = async function (context, req) {
  const date = "2025-02-27T05:12:39.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

