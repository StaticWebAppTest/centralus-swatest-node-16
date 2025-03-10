module.exports = async function (context, req) {
  const date = "2025-03-10T12:24:46.727Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

