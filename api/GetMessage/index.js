module.exports = async function (context, req) {
  const date = "2025-02-04T23:11:06.007Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

