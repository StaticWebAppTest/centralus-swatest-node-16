module.exports = async function (context, req) {
  const date = "2025-10-29T13:28:00.773Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

