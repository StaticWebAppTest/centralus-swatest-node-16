module.exports = async function (context, req) {
  const date = "2025-03-26T13:22:37.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

