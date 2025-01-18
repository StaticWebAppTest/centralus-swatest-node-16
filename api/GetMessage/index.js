module.exports = async function (context, req) {
  const date = "2025-01-18T11:08:24.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

