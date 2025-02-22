module.exports = async function (context, req) {
  const date = "2025-02-22T11:08:31.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

