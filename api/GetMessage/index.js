module.exports = async function (context, req) {
  const date = "2025-05-10T21:10:37.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

