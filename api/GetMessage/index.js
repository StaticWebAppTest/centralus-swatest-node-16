module.exports = async function (context, req) {
  const date = "2025-01-27T06:17:02.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

