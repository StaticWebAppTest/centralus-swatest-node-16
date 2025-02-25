module.exports = async function (context, req) {
  const date = "2025-02-25T15:13:06.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

