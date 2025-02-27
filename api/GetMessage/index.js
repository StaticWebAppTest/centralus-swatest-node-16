module.exports = async function (context, req) {
  const date = "2025-02-27T11:10:24.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

