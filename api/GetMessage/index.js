module.exports = async function (context, req) {
  const date = "2023-04-17T11:07:47.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

