module.exports = async function (context, req) {
  const date = "2025-12-07T21:11:03.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

