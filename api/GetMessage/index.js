module.exports = async function (context, req) {
  const date = "2025-01-10T13:18:01.226Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

