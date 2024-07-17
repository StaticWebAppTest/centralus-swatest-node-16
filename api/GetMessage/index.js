module.exports = async function (context, req) {
  const date = "2024-07-17T02:36:56.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

