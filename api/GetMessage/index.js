module.exports = async function (context, req) {
  const date = "2025-02-23T06:15:26.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

