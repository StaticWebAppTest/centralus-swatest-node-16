module.exports = async function (context, req) {
  const date = "2024-04-29T14:10:07.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

