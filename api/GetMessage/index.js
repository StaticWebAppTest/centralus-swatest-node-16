module.exports = async function (context, req) {
  const date = "2024-09-29T19:08:27.160Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

