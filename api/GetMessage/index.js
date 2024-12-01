module.exports = async function (context, req) {
  const date = "2024-12-01T12:22:23.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

