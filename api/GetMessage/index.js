module.exports = async function (context, req) {
  const date = "2025-05-31T10:13:05.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

