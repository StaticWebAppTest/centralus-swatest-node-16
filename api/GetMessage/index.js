module.exports = async function (context, req) {
  const date = "2024-03-29T20:10:09.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

