module.exports = async function (context, req) {
  const date = "2024-10-01T12:22:54.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

