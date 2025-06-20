module.exports = async function (context, req) {
  const date = "2025-06-20T06:20:20.037Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

