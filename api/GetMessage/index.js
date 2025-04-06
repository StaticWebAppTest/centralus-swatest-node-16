module.exports = async function (context, req) {
  const date = "2025-04-06T10:12:46.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

