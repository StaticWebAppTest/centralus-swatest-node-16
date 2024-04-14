module.exports = async function (context, req) {
  const date = "2024-04-14T02:53:18.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

