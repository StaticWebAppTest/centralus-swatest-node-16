module.exports = async function (context, req) {
  const date = "2023-07-26T03:09:07.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

