module.exports = async function (context, req) {
  const date = "2024-04-29T21:08:42.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

