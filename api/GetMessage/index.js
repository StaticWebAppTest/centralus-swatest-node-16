module.exports = async function (context, req) {
  const date = "2025-03-20T12:24:14.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

