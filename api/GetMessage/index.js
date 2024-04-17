module.exports = async function (context, req) {
  const date = "2024-04-17T02:19:36.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

