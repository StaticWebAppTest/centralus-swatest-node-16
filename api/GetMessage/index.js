module.exports = async function (context, req) {
  const date = "2025-02-24T11:10:14.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

