module.exports = async function (context, req) {
  const date = "2025-02-23T14:10:59.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

