module.exports = async function (context, req) {
  const date = "2025-07-05T10:13:05.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

