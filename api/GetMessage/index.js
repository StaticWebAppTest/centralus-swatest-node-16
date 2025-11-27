module.exports = async function (context, req) {
  const date = "2025-11-27T08:20:20.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

