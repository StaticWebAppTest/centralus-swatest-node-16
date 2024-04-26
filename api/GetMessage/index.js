module.exports = async function (context, req) {
  const date = "2024-04-26T02:19:43.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

