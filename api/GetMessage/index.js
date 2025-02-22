module.exports = async function (context, req) {
  const date = "2025-02-22T05:11:18.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

