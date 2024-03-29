module.exports = async function (context, req) {
  const date = "2024-03-29T19:06:51.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

