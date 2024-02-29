module.exports = async function (context, req) {
  const date = "2024-02-29T19:06:51.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

