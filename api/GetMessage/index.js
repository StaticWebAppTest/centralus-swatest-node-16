module.exports = async function (context, req) {
  const date = "2025-05-08T22:12:27.243Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

