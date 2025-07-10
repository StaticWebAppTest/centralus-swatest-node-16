module.exports = async function (context, req) {
  const date = "2025-07-10T11:12:46.403Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

