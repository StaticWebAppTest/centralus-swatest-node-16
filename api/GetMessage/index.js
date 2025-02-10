module.exports = async function (context, req) {
  const date = "2025-02-10T17:10:10.395Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

