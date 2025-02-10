module.exports = async function (context, req) {
  const date = "2025-02-10T05:12:50.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

