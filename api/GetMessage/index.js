module.exports = async function (context, req) {
  const date = "2025-05-15T15:13:18.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

