module.exports = async function (context, req) {
  const date = "2025-05-25T01:12:13.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

