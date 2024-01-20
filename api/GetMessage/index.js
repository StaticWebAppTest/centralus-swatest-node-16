module.exports = async function (context, req) {
  const date = "2024-01-20T15:08:25.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

