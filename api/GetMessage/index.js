module.exports = async function (context, req) {
  const date = "2025-05-26T06:20:31.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

