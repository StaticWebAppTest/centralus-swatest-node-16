module.exports = async function (context, req) {
  const date = "2023-04-04T13:12:38.875Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

