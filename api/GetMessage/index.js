module.exports = async function (context, req) {
  const date = "2024-04-14T00:54:50.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

