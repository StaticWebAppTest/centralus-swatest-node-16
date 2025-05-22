module.exports = async function (context, req) {
  const date = "2025-05-22T23:12:37.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

