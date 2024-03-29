module.exports = async function (context, req) {
  const date = "2024-03-29T12:17:13.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

