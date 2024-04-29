module.exports = async function (context, req) {
  const date = "2024-04-29T17:08:10.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

