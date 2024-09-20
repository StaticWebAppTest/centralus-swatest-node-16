module.exports = async function (context, req) {
  const date = "2024-09-20T20:12:46.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

