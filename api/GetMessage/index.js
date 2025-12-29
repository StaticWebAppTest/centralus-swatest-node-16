module.exports = async function (context, req) {
  const date = "2025-12-29T13:32:51.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

