module.exports = async function (context, req) {
  const date = "2024-01-01T05:09:51.017Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

