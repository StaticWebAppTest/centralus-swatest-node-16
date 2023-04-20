module.exports = async function (context, req) {
  const date = "2023-04-20T13:12:27.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

