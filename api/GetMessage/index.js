module.exports = async function (context, req) {
  const date = "2025-09-10T12:25:29.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

