module.exports = async function (context, req) {
  const date = "2025-08-01T11:12:33.808Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

