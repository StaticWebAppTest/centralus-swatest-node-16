module.exports = async function (context, req) {
  const date = "2025-12-27T15:13:05.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

