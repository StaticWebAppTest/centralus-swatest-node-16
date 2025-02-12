module.exports = async function (context, req) {
  const date = "2025-02-12T15:13:03.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

