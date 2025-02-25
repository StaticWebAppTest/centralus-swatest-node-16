module.exports = async function (context, req) {
  const date = "2025-02-25T06:17:09.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

